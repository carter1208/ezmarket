pragma solidity ^0.4.11;

library SafeMath {
    function mul(uint256 a, uint256 b) internal constant returns (uint256) {
        uint256 c = a * b;
        assert(a == 0 || c / a == b);
        return c;
    }
    function div(uint256 a, uint256 b) internal constant returns (uint256) {
        uint256 c = a / b;
        return c;
    }
    function sub(uint256 a, uint256 b) internal constant returns (uint256) {
        assert(b <= a);
        return a - b;
    }
    function add(uint256 a, uint256 b) internal constant returns (uint256) {
        uint256 c = a + b;
        assert(c >= a);
        return c;
    }
}
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
        require(newOwner != address(0));
        owner = newOwner;
    }
}
contract ERC20 is Ownable {
    function allowance(address owner, address spender) constant returns (uint256);
    function transferFrom(address from, address to, uint256 value) returns (bool);
    function transfer(address to, uint256 value) returns (bool);
    function approve(address spender, uint256 value) returns (bool);
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
}

contract ERC20Basic {
    uint256 public totalSupply;
    function balanceOf(address who) constant returns (uint256);
}

contract BasicToken is ERC20Basic {
    using SafeMath for uint256;
    mapping(address => uint256) balances;
    function balanceOf(address _owner) constant returns (uint256 balance) {
        return balances[_owner];
    }
}

contract StandardToken is ERC20, BasicToken {

    mapping (address => mapping (address => uint256)) allowed;
    function transfer(address _to, uint256 _value) returns (bool) {
        balances[msg.sender] = balances[msg.sender].sub(_value);
        balances[_to] = balances[_to].add(_value);
        Transfer(msg.sender, _to, _value);
        return true;
    }
    function transferFrom(address _from, address _to, uint256 _value) returns (bool) {
        var _allowance = allowed[_from][msg.sender];
        balances[_to] = balances[_to].add(_value);
        balances[_from] = balances[_from].sub(_value);
        allowed[_from][msg.sender] = _allowance.sub(_value);
        Transfer(_from, _to, _value);
        return true;
    }
    function approve(address _spender, uint256 _value) returns (bool) {
        require((_value == 0) || (allowed[msg.sender][_spender] == 0));
        allowed[msg.sender][_spender] = _value;
        Approval(msg.sender, _spender, _value);
        return true;
    }
    function allowance(address _owner, address _spender) constant returns (uint256 remaining) {
        return allowed[_owner][_spender];
    }

}
contract MintableToken is StandardToken {
    event Mint(address indexed to, uint256 amount);
    event MintFinished();

    bool public mintingFinished = false;

    address public mintAddress;

    modifier canMint() {
        require(!mintingFinished);
        _;
    }
    modifier onlyMint() {
        // Only crowdsale contracts are allowed to mint new tokens
        require(msg.sender == mintAddress);
        _;
    }
    function setMintAddress(address addr) onlyOwner public {
        mintAddress = addr;
    }

    function mint(address _to, uint256 _amount) onlyMint canMint returns (bool) {
        totalSupply = totalSupply.add(_amount);
        balances[_to] = balances[_to].add(_amount);
        Mint(_to, _amount);
        Transfer(0x0, _to, _amount);
        return true;
    }

    function finishMinting() onlyOwner returns (bool) {
        mintingFinished = true;
        MintFinished();
        return true;
    }
}

contract MatryxToken is MintableToken {
    string public name = "MatryxToken";
    string public symbol = "MTX";
    uint public decimals = 8;

    function MatryxToken() {
    }
}

//////////////////////////
// CROWDSALE CONTRACTS  //
//////////////////////////
contract RewardToken {
    function mint(address _to, uint256 _amount);
}

contract Crowdsale {
    RewardToken public token;
    address public wallet;

    // presale, start and end timestamps where investments are allowed
    uint256 public presaleStartTime = now;
    uint256 public startTime = presaleStartTime + 5 minutes;
    uint256 public endTime = startTime + 6 weeks;
    uint256 public rate0 = 1500; //presale rate
    uint256 public rate1 = 1300;
    uint256 public rate2 = 1250;
    uint256 public rate3 = 1200;
    uint256 public rate4 = 1150;
    uint256 public rate5 = 1100;
    uint256 public rate6 = 1000;
    uint256 public period1 = startTime + 1 minutes;
    uint256 public period2 = startTime + 2 minutes;
    uint256 public period3 = startTime + 3 minutes;
    uint256 public period4 = startTime + 4 minutes;
    uint256 public period5 = startTime + 5 minutes;

    // amount of raised money in wei
    uint256 public weiRaised;

    event TokenPurchase(address indexed purchaser, address indexed beneficiary, uint256 value, uint256 amount);

    function Crowdsale(address _wallet, address _token){
        token = RewardToken(_token);
        wallet = _wallet;
    }

    // default buy function
    function () public payable {
        buyTokens(msg.sender);
    }

    function buyTokens(address beneficiary) payable {
        require(beneficiary != 0x0);
        require(msg.value != 0);

        if(isPresale()) {
            buyPresale(beneficiary);
        } else {
            buySale(beneficiary);
        }
    }

    function buyPresale(address beneficiary) internal {
        uint256 weiAmount = msg.value;

        // calculate token amount to be created
        uint256 tokens = weiAmount * rate0 * 10**8 / 1 ether;

        // update state
        weiRaised += weiAmount;
        token.mint(beneficiary, tokens);
        TokenPurchase(msg.sender, beneficiary, weiAmount, tokens);
        forwardFunds();
    }

    function buySale(address beneficiary) internal {
        require (now >= startTime);
        require (now <= endTime);
        uint256 weiAmount = msg.value;

        // calculate token amount to be created
        uint256 rate = 0;
        if (now < period1) {
            rate = rate1;
        } else if (now < period2) {
            rate = rate2;
        } else if (now < period3) {
            rate = rate3;
        } else if (now < period4) {
            rate = rate4;
        } else if (now < period5) {
            rate = rate5;
        } else {
            rate = rate6;
        }
        uint256 tokens = weiAmount * rate * 10**8 / 1 ether;
        // update state
        weiRaised += weiAmount;
        token.mint(beneficiary, tokens);
        TokenPurchase(msg.sender, beneficiary, weiAmount, tokens);
        forwardFunds();
    }

    // send ether to the fund collection wallet
    // override to create custom fund forwarding mechanisms
    function forwardFunds() internal {
        wallet.transfer(msg.value);
    }

    // @return true if within presale time
    function isPresale() public constant returns (bool) {
        bool withinPresale = now >= presaleStartTime && now < startTime;
        return withinPresale;
    }
}
