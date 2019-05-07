pragma solidity ^0.4.11;
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

contract RewardToken {
    function mint(address _to, uint256 _amount);
}

contract Crowdsale is SafeMath, Ownable {
    //MatryxToken public token;
    RewardToken public token;
    address public wallet;

    // presale, start and end timestamps where investments are allowed
    uint256 public presaleStartTime = now;
    uint256 public startTime = presaleStartTime + 5 minutes;
    uint256 public endTime = startTime + 1 hours;
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

    bool public isFinalized;
    // amount of raised money in wei
    uint256 public weiRaised;

    event TokenPurchase(address indexed purchaser, address indexed beneficiary, uint256 value, uint256 amount);

    function Crowdsale(address _wallet, address _token){
        //token = MatryxToken(_token);
        token = RewardToken(_token);
        wallet = _wallet;
        isFinalized = false;
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
        uint256 tokens = safeMult(weiAmount, rate0);

        // update state
        weiRaised = safeAdd(weiRaised, weiAmount);
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
        uint256 tokens = safeMult(weiAmount, rate);
        // update state
        weiRaised = safeAdd(weiRaised, weiAmount);
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

    function finalize() onlyOwner {
        require (!isFinalized);
        isFinalized = true;
        wallet.transfer(this.balance);
    }
}
