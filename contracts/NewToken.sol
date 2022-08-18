pragma solidity ^0.5.7;

import "./ERC20Standard.sol";

contract NewToken is ERC20Standard {
	constructor() public {
		totalSupply = 1000000000000000000000;
		name = "Stable";
		decimals = 6;
		symbol = "USDC";
		version = "1.0";
		balances[msg.sender] = totalSupply;
	}
}
