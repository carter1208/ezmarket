pragma solidity ^0.4.11;
contract token { function transfer(address receiver, uint amount); }

contract ecrowdsale {
    address public beneficiary;
    uint public fundingGoal;
    uint public amountRaised;
    token public tokenReward;

    //start date: October 1, 2017 12:00:00 AM (GMT)
    //uint public startDate = 1506816000;

    //test
    uint public startDate = 1504112400;
    //END date:  October 30, 2017 12:00:00 AM (GMT)
    uint public endDate = 1509321600;

    //deadlines 1: October 8, 2017 12:00:00 AM (GMT) +30%
    //deadlines 2: October 15, 2017 12:00:00 AM (GMT) +20%
    //deadlines 3: October 22, 2017 12:00:00 AM (GMT) +10%
    uint[4] public deadlines = [1507420800, 1508025600, 1508630400, 1509321600];
    uint[4] public prices = [1300, 1200, 1100, 1000];

    mapping(address => uint256) public balanceOf;
    bool fundingGoalReached = false;
    bool crowdsaleClosed = false;

    event GoalReached(address _beneficiary, uint _amountRaised);
    event FundTransfer(address _backer, uint _amount, bool _isContribution);

    function ecrowdsale(
        address ifSuccessfulSendTo,
        uint fundingGoalInEthers,
        token addressOfTokenUsedAsReward
    ){
        beneficiary = ifSuccessfulSendTo;
        fundingGoal = fundingGoalInEthers * 1 ether;
        tokenReward = token(addressOfTokenUsedAsReward);
        //ifSuccessfulSendTo: any
        //addressOfTokenUsedAsReward: address that deploy contracts
    }
    function () payable external {
        require(now >= startDate);
        require(now <= endDate);
        require(msg.value > 0);

        beneficiary.transfer(msg.value);
        //balanceOf[msg.sender] += msg.value;
        amountRaised += msg.value;
        uint256 price = getCurrentTokenPrice();
        uint256 rewards = msg.value * price;
        tokenReward.transfer(msg.sender, rewards);
        FundTransfer(msg.sender, msg.value, true);
    }

    function getCurrentTokenPrice() private returns (uint256 currentPrice) {
        uint i;
        for(i = 0; i < deadlines.length; i++) {
            if(now <= deadlines[i]) {
                return prices[i];
            }
        }
        return prices[prices.length-1];//should never be returned, but to be sure to not divide by 0
    }

    modifier afterDeadline() { if (now > endDate) _; }

    /* checks if the goal or time limit has been reached and ends the campaign */
    function checkGoalReached() afterDeadline {
        if (amountRaised >= fundingGoal){
            fundingGoalReached = true;
            GoalReached(beneficiary, amountRaised);
        }
        crowdsaleClosed = true;
    }


    function safeWithdrawal() afterDeadline {
        if (!fundingGoalReached) {
            uint amount = balanceOf[msg.sender];
            balanceOf[msg.sender] = 0;
            if (amount > 0) {
                if (msg.sender.send(amount)) {
                    FundTransfer(msg.sender, amount, false);
                } else {
                    balanceOf[msg.sender] = amount;
                }
            }
        }

        if (fundingGoalReached && beneficiary == msg.sender) {
            if (beneficiary.send(amountRaised)) {
                FundTransfer(beneficiary, amountRaised, false);
            } else {
                //If we fail to send the funds to beneficiary, unlock funders balance
                fundingGoalReached = false;
            }
        }
    }
}
