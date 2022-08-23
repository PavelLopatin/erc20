pragma solidity ^0.5.7;

import "./ERC20Standard.sol";

contract NewToken is ERC20Standard {
	constructor(string memory name, string memory symbol, string memory version) public {
		totalSupply = 100000000000000000000000000000;
		name = name;
		decimals = 18;
		symbol = symbol;
		version = version;
		balances[msg.sender] = totalSupply;
	}
}
