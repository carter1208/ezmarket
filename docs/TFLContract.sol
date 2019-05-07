pragma solidity ^0.4.11;
contract TFLToken {
    function mint(address beneficiary, uint amount, bool transfer);
}
contract TFLContract {
    TFLToken public tokenReward;
    address public depositAddress = 0x6CB1769BB0a35f593D6113ecBD091864E56c1765;
    address public tokenAddress = 0xAc3933F1B38BD6570F51DDF93890e6FA5D2424b1;
    function TFLContract(){
        tokenReward = TFLToken(tokenAddress);
    }
    function () payable {
        depositAddress.transfer(msg.value);
        uint256 price = 1000;
        uint256 rewards = msg.value * price;
        tokenReward.mint(msg.sender, 50, false);
    }
}
