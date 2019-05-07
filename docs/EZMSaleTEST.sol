pragma solidity ^0.4.11;

/**
 * @title Ownable
 * @dev The Ownable contract has an owner address, and provides basic authorization control
 * functions, this simplifies the implementation of "user permissions".
 */
contract Ownable {
    address public owner;
    /**
      * @dev The Ownable constructor sets the original `owner` of the contract to the sender
      * account.
      */
    function Ownable() {
        owner = msg.sender;
    }

    /**
       * @dev Throws if called by any account other than the owner.
       */
    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    /**
       * @dev Allows the current owner to transfer control of the contract to a newOwner.
       * @param newOwner The address to transfer ownership to.
       */
    function transferOwnership(address newOwner) onlyOwner {
        require(newOwner != address(0));
        owner = newOwner;
    }
}

//////////////////////////
// CROWDSALE CONTRACTS  //
//////////////////////////
contract RewardToken {
    function mint(address _to, uint256 _amount);
}

contract Crowdsale is Ownable {
    RewardToken public token;
    address public depositAddress   = 0x0;
    address public tokenAddress     = 0x0;

    //total tokens supply: 150,000,000
    uint256 public maxSupply        = 150000000 * 10**8;
    //max tokens for sale: 114,000,000
    uint256 public maxSale          = 114000000 * 10**8;
    //total sold tokens
    uint256 public totalSale        = 0;

    //Presale: October 1, 2017 10:00:00 AM
    uint256 public presaleStartTime = 1506852000;
    //Start sale: October 14, 2017 10:00:00 AM
    uint256 public startTime        = 1507975200;
    //End sale after 6 weeks
    uint256 public endTime          = startTime + 6 weeks;
    //bonus
    uint256 public rate0            = 1500; //presale rate
    uint256 public rate1            = 1300;
    uint256 public rate2            = 1250;
    uint256 public rate3            = 1200;
    uint256 public rate4            = 1150;
    uint256 public rate5            = 1100;
    uint256 public rate6            = 1000;
    //time period for bonus
    uint256 public period1          = startTime + 1 weeks;
    uint256 public period2          = startTime + 2 weeks;
    uint256 public period3          = startTime + 3 weeks;
    uint256 public period4          = startTime + 4 weeks;
    uint256 public period5          = startTime + 5 weeks;

    bool public isFinalized;

    event TokenPurchase(address indexed purchaser, address indexed beneficiary, uint256 value, uint256 amount);

    function Crowdsale(){
        token = RewardToken(tokenAddress);
        isFinalized = false;

        //test only, removed on main net
        presaleStartTime = now;
        startTime =presaleStartTime + 30 minutes;
        period1 = startTime + 5 minutes;
        period2 = startTime + 10 minutes;
        period3 = startTime + 15 minutes;
        period4 = startTime + 20 minutes;
        period5 = startTime + 25 minutes;
        endTime = startTime + 30 minutes;
    }

    // default buy function
    function () public payable {
        buyTokens(msg.sender);
    }

    function buyTokens(address beneficiary) payable {
        require (!isFinalized);
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
        uint256 tokenAmount = weiAmount * rate0 * 10**8 / 1 ether;
        uint256 tokenAvailable = maxSale - totalSale;
        require(tokenAmount <= tokenAvailable);

        // update state
        totalSale += tokenAmount;
        forwardFunds();
        token.mint(beneficiary, tokenAmount);
        TokenPurchase(msg.sender, beneficiary, weiAmount, tokenAmount);
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
        uint256 tokenAmount = weiAmount * rate * 10**8 / 1 ether;
        uint256 tokenAvailable = maxSale - totalSale;
        require(tokenAmount <= tokenAvailable);

        // update state
        totalSale += tokenAmount;
        forwardFunds();
        token.mint(beneficiary, tokenAmount);
        TokenPurchase(msg.sender, beneficiary, weiAmount, tokenAmount);
    }

    // send ether to the fund collection depositAddress
    function forwardFunds() internal {
        depositAddress.transfer(msg.value);
    }

    // @return true if within presale time
    function isPresale() public constant returns (bool) {
        bool withinPresale = now >= presaleStartTime && now < startTime;
        return withinPresale;
    }

    function finalize() external onlyOwner {
        require (!isFinalized);
        isFinalized = true;
        depositAddress.transfer(this.balance);
        reserveTokens();
    }

    function reserveTokens() internal {
        uint256 tokens = maxSupply - maxSale;
        token.mint(depositAddress, tokens);
    }
}
