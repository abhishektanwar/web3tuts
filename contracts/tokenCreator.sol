pragma solidity ^0.6.0;

import "@openzeppelin/contracts/GSN/Context.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract tokenCreator is Context, ERC20 {
	constructor () public ERC20("HashCash Token","HC"){
		_mint(_msgSender(),1000 * (10 ** uint256(decimals())));
	}
}