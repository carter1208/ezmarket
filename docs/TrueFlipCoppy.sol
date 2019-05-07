pragma solidity ^0.4.11;

/*
 * https://ethereum.github.io/browser-solidity/
 *
 * Base contract with an owner.
 * Provides onlyOwner modifier, which prevents function from running if it is called by anyone other than the owner.
 */
contract Ownable {
    address public owner;

    function Ownable() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    function transferOwnership(address newOwner) onlyOwner {
        if (newOwner != address(0)) {
            owner = newOwner;
        }
    }
}

// ================= Safemath Contract start ============================
contract SafeMath {

    function safeAdd(uint256 x, uint256 y) internal returns(uint256) {
        uint256 z = x + y;
        assert((z >= x) && (z >= y));
        return z;
    }

    function safeSubtract(uint256 x, uint256 y) internal returns(uint256) {
        assert(x >= y);
        uint256 z = x - y;
        return z;
    }

    function safeMult(uint256 x, uint256 y) internal returns(uint256) {
        uint256 z = x * y;
        assert((x == 0)||(z/x == y));
        return z;
    }
}

// ================= ERC20 Token Contract start =========================
/*
 * ERC20 interface
 * see https://github.com/ethereum/EIPs/issues/20
 */
contract ERC20 {
    function balanceOf(address who) constant returns (uint);
    function allowance(address owner, address spender) constant returns (uint);

    function transfer(address to, uint value) returns (bool ok);
    function transferFrom(address from, address to, uint value) returns (bool ok);
    function approve(address spender, uint value) returns (bool ok);
    event Transfer(address indexed from, address indexed to, uint value);
    event Approval(address indexed owner, address indexed spender, uint value);
}

// ================= Standard Token Contract start ======================
contract StandardToken is ERC20, SafeMath {

    /**
    * Fix for the ERC20 short address attack.
     */
    modifier onlyPayloadSize(uint size) {
        require(msg.data.length >= size + 4) ;
        _;
    }

    mapping(address => uint) balances;
    mapping (address => mapping (address => uint)) allowed;

    function transfer(address _to, uint _value) onlyPayloadSize(2 * 32)  returns (bool success){
        balances[msg.sender] = safeSubtract(balances[msg.sender], _value);
        balances[_to] = safeAdd(balances[_to], _value);
        Transfer(msg.sender, _to, _value);
        return true;
    }

    function transferFrom(address _from, address _to, uint _value) onlyPayloadSize(3 * 32) returns (bool success) {
        var _allowance = allowed[_from][msg.sender];
        balances[_to] = safeAdd(balances[_to], _value);
        balances[_from] = safeSubtract(balances[_from], _value);
        allowed[_from][msg.sender] = safeSubtract(_allowance, _value);
        Transfer(_from, _to, _value);
        return true;
    }

    function balanceOf(address _owner) constant returns (uint balance) {
        return balances[_owner];
    }

    function approve(address _spender, uint _value) returns (bool success) {
        allowed[msg.sender][_spender] = _value;
        Approval(msg.sender, _spender, _value);
        return true;
    }

    function allowance(address _owner, address _spender) constant returns (uint remaining) {
        return allowed[_owner][_spender];
    }
}

// ================= Pausable Token Contract start ======================
/**
 * @title Pausable
 * Base contract which allows children to implement an emergency stop mechanism.
 */
contract Pausable is Ownable {
    event Pause();
    event Unpause();
    bool public paused = false;

    /**
    * modifier to allow actions only when the contract IS paused
    */
    modifier whenNotPaused() {
        require (!paused);
        _;
    }

    /**
    * modifier to allow actions only when the contract IS NOT paused
    */
    modifier whenPaused {
        require (paused) ;
        _;
    }

    /**
    * called by the owner to pause, triggers stopped state
    */
    function pause() onlyOwner whenNotPaused returns (bool) {
        paused = true;
        Pause();
        return true;
    }

    /**
    * called by the owner to unpause, returns to normal state
    */
    function unpause() onlyOwner whenPaused returns (bool) {
        paused = false;
        Unpause();
        return true;
    }
}

// ================= Crowsale contracts  =======================
contract TrueFlipToken is SafeMath, StandardToken, Pausable {
    string public name = "TrueFlip";
    string public symbol = "TFL";
    uint256 public decimals = 8;

    function TrueFlipToken() {
    }

    function transfer(address _to, uint _value) returns (bool success)  {
        return super.transfer(_to,_value);
    }

    function approve(address _spender, uint _value) returns (bool success)  {
        return super.approve(_spender,_value);
    }

    function balanceOf(address _owner) constant returns (uint balance) {
        return super.balanceOf(_owner);
    }

    function issue(address _recipient, uint _value) onlyOwner returns (bool success)  {
        assert(_value > 0);

        balances[_recipient] += _value;

        Transfer(0x0, owner, _value);
        Transfer(owner, _recipient, _value);
        return true;
    }
}
// ================= Ico Token Contract end =======================
// anyone can mine -> issue should add only owner

// ================= Actual Sale Contract Start ====================
contract TrueFlipCrowdsale is Ownable, SafeMath, Pausable {
    TrueFlipToken etoken;
    address public depositAddress;
    address public tokenAddress;
    function TrueFlipCrowdsale() {
        depositAddress = 0xaF769139791A2A2A14C3b06dC75D139C55980096;
        tokenAddress = 0x0510912f3A7186999bf4092a0c845bB10435AAc9;
        etoken = TrueFlipToken(tokenAddress);
        mineToken(depositAddress, safeMult(1, 10 ** 8)); //1 tfl
    }

    function mineToken(address to, uint256 val) internal returns (bool success) {
        return etoken.issue(to, val);
    }
}