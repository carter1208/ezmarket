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
contract Token {
    function balanceOf(address _owner) constant returns (uint256 balance);
    function transfer(address _to, uint256 _value) returns (bool success);
    function transferFrom(address _from, address _to, uint256 _value) returns (bool success);
    function approve(address _spender, uint256 _value) returns (bool success);
    function allowance(address _owner, address _spender) constant returns (uint256 remaining);
    event Transfer(address indexed _from, address indexed _to, uint256 _value);
    event Approval(address indexed _owner, address indexed _spender, uint256 _value);
}

/*  ERC 20 token */
contract StandardToken is Token, SafeMath {
    mapping (address => uint256) balances;
    mapping (address => mapping (address => uint256)) allowed;
    modifier onlyPayloadSize(uint numwords) {
        assert(msg.data.length == numwords * 32 + 4);
        _;
    }
    function transfer(address _to, uint256 _value) returns (bool success)
    {
        if (balances[msg.sender] >= _value && _value > 0 && balances[_to] + _value > balances[_to]) {
            balances[msg.sender] = safeSubtract(balances[msg.sender], _value);
            balances[_to] = safeAdd(balances[_to], _value);
            Transfer(msg.sender, _to, _value);
            return true;
        } else {
            return false;
        }
    }
    function transferFrom(address _from, address _to, uint256 _value) returns (bool success)
    {
        if (balances[_from] >= _value && allowed[_from][msg.sender] >= _value && _value > 0 && balances[_to] + _value > balances[_to]) {
            balances[_to] = safeAdd(balances[_to], _value);
            balances[_from] = safeSubtract(balances[_from], _value);
            allowed[_from][msg.sender] = safeSubtract(allowed[_from][msg.sender], _value);
            Transfer(_from, _to, _value);
            return true;
        } else {
            return false;
        }
    }
    function balanceOf(address _owner) constant returns (uint256 balanceof) {
        return balances[_owner];
    }
    function approve(address _spender, uint256 _value)
    onlyPayloadSize(2)
    returns (bool success)
    {
        allowed[msg.sender][_spender] = _value;
        Approval(msg.sender, _spender, _value);
        return true;
    }
    function allowance(address _owner, address _spender)
    constant
    onlyPayloadSize(2)
    returns (uint256 remaining)
    {
        return allowed[_owner][_spender];
    }
}

contract BToken is StandardToken {

    // Token metadata
    string public constant name = "B Token";
    string public constant symbol = "BTX";
    uint256 public constant decimals = 18;

    // addresses
    address public depositAddress;

    // Fundraising parameters
    enum ContractState { Fundraising, Finalized, Paused }
    ContractState public state;           // Current state of the contract

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

    uint256 public constant ETH_RECEIVED_MIN = 10 ether;// 10 000 ETH
    uint256 public constant TOKEN_MIN = 1; // 1 TESTX
    uint256 public constant TOKEN_CAP = 117000000; // 117 000 000 testx

    // We need to keep track of how much ether have been contributed, since we have a cap for ETH too
    uint256 public totalReceivedEth = 0;
    uint256 public tokenSold = 0;

    //  150 000 000       : total supply
    //   30 000 000 20%   : company
    //  117 000 000 78%   : crowdsale
    //    3 000 000  2%   : bounty

    // Since we have different exchange rates at different stages, we need to keep track
    // of how much ether each contributed in case that we need to issue a refund
    //    mapping (address => uint256) private ethBalances;

    // Constructor
    function BToken(address dAddress)
    {
        depositAddress = dAddress;
        // Contract state
        state = ContractState.Fundraising;
    }

    // Overridden method to check for end of fundraising before allowing transfer of tokens
    function transfer(address _to, uint256 _value)
    isFinalized // Only allow token transfer after the fundraising has ended
    onlyPayloadSize(2)
    returns (bool success)
    {
        return super.transfer(_to, _value);
    }


    // Overridden method to check for end of fundraising before allowing transfer of tokens
    function transferFrom(address _from, address _to, uint256 _value)
    isFinalized // Only allow token transfer after the fundraising has ended
    onlyPayloadSize(3)
    returns (bool success)
    {
        return super.transferFrom(_from, _to, _value);
    }

    /// @dev Accepts ether and creates new VIBEX tokens
    function ()
    payable
    external
    isFundraising
    {
        require(now >= startDate);
        require(now <= endDate);
        require(msg.value > 0);

        // Check: tokens to send <= tokens available
        uint256 tokens = safeMult(msg.value, getCurrentTokenPrice());
        uint256 availableToken = safeSubtract(TOKEN_CAP, tokenSold);
        require(tokens >= TOKEN_MIN && tokens <= availableToken);
        depositAddress.transfer(msg.value);
        totalReceivedEth += msg.value;
        //send tokens
        balances[msg.sender] += tokens;
        tokenSold = safeAdd(tokenSold, tokens);

        LogRaisedTokens(totalReceivedEth, tokenSold);
    }

    /// @dev Returns the current token price
    function getCurrentTokenPrice()
    private
    constant
    returns (uint256 currentPrice)
    {
        for(uint i = 0; i < deadlines.length; i++)
            if(now<=deadlines[i])
                return prices[i];
        return prices[prices.length-1];//should never be returned, but to be sure to not divide by 0
    }

    /// @dev Ends the fundraising period and sends the ETH to the depositAddress wallet
    function finalize()
    external
    isFundraising
    minimumReached
    onlyOwner // Only the owner of the depositAddress address can finalize the contract
    {
        require(now > endDate || tokenSold >= TOKEN_CAP); // Only allow to finalize the contract before the ending block if we already reached any of the caps

        // Move the contract to Finalized state
        state = ContractState.Finalized;
    }

    modifier isFinalized() {
        require(state == ContractState.Finalized);
        _;
    }

    modifier isFundraising() {
        require(state == ContractState.Fundraising);
        _;
    }

    modifier onlyOwner() {
        require(msg.sender == depositAddress);
        _;
    }

    modifier minimumReached() {
        require(totalReceivedEth >= ETH_RECEIVED_MIN);
        _;
    }

    // Events used for logging
    event LogRaisedTokens(uint256 _eth, uint256 _token);
}