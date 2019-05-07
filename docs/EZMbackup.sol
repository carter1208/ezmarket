pragma solidity ^0.4.11;
//This work!!! but everyone can mine
/*
 * Ownable
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
    uint public totalSupply;
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
    * @dev Fix for the ERC20 short address attack.
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
 * @dev Base contract which allows children to implement an emergency stop mechanism.
 */
contract Pausable is Ownable {
    event Pause();
    event Unpause();
    bool public paused = false;


    /**
    * @dev modifier to allow actions only when the contract IS paused
    */
    modifier whenNotPaused() {
        require (!paused);
        _;
    }

    /**
    * @dev modifier to allow actions only when the contract IS NOT paused
    */
    modifier whenPaused {
        require (paused) ;
        _;
    }

    /**
    * @dev called by the owner to pause, triggers stopped state
    */
    function pause() onlyOwner whenNotPaused returns (bool) {
        paused = true;
        Pause();
        return true;
    }

    /**
    * @dev called by the owner to unpause, returns to normal state
    */
    function unpause() onlyOwner whenPaused returns (bool) {
        paused = false;
        Unpause();
        return true;
    }
}

// ================= Crowsale contracts  =======================
contract EZMToken is SafeMath, StandardToken, Pausable {
    string public name = "EZMarket";
    string public symbol = "EZM";
    uint256 public decimals = 18;

    function EZMToken() {
    }

    function transfer(address _to, uint _value) whenNotPaused returns (bool success)  {
        return super.transfer(_to,_value);
    }

    function approve(address _spender, uint _value) whenNotPaused returns (bool success)  {
        return super.approve(_spender,_value);
    }

    function balanceOf(address _owner) constant returns (uint balance) {
        return super.balanceOf(_owner);
    }

    function issue(address _recipient, uint _value) whenNotPaused returns (bool success)  {
        assert(_value > 0);

        balances[_recipient] += _value;
        totalSupply += _value;

        Transfer(0x0, owner, _value);
        Transfer(owner, _recipient, _value);
        return true;
    }
}
// ================= Ico Token Contract end =======================

// ================= Actual Sale Contract Start ====================
contract EZMCrowdsale is Ownable, SafeMath, Pausable {
    uint256 public decimals = 18;
    EZMToken etoken;

    address public depositAddress;
    address public tokenAddress;

    //start date: October 1, 2017 12:00:00 AM (GMT) : 1506816000
    //end date:  October 30, 2017 12:00:00 AM (GMT)
    uint256 public startTime = now; //now just test
    uint256 public endTime = startTime + 30 days;
    uint256 public minContribution = 0.01 ether;

    //phases 1: October 8, 2017 12:00:00 AM (GMT) +30%
    //phases 2: October 15, 2017 12:00:00 AM (GMT) +20%
    //phases 3: October 22, 2017 12:00:00 AM (GMT) +10%
    //phases 4: October 22, 2017 12:00:00 AM (GMT) +0%
    uint[4] public phases = [
    startTime + 1 weeks,
    startTime + 2 weeks,
    startTime + 3 weeks,
    endTime
    ];
    uint[4] public prices = [1300, 1200, 1100, 1000];

    bool public isFinalized;

    event MintToken(address from, address to, uint256 val);

    function CreateToken(address to, uint256 val) internal returns (bool success) {
        MintToken(0x0, to, val);
        return etoken.issue(to, val);
    }

    function EZMCrowdsale(address _depositAddress, address _tokenAddress) {
        depositAddress = _depositAddress;
        tokenAddress = _tokenAddress;
        etoken = EZMToken(tokenAddress);
        isFinalized = false;
    }

    function () payable {
        createTokens(msg.sender, msg.value);
    }

    /// @dev Accepts ether and creates new etoken tokens.
    function createTokens(address _beneficiary, uint256 _value) internal whenNotPaused {
        require (now >= startTime);
        require (now <= endTime);
        require (_value >= minContribution);
        require (!isFinalized);

        uint256 tokens = tokenExchange(_value);

        require(CreateToken(_beneficiary, tokens));
        depositAddress.transfer(this.balance);
    }

    function tokenExchange(uint256 _wei) returns (uint256 amount) {
        uint256 rate = 1000;
        for(uint i = 0; i < phases.length; i++) {
            if(now <= phases[i]) {
                rate = prices[i];
                break;
            }
        }

        return _wei * rate * 10**decimals / 1 ether;
    }

    /// @dev Ends the funding period and sends the ETH home
    function finalize() external onlyOwner {
        require (!isFinalized);
        // move to operational
        isFinalized = true;
        depositAddress.transfer(this.balance);
    }
}