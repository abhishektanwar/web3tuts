pragma solidity ^0.6.0;

import "@openzeppelin/contracts/GSN/Context.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract tokenCreator is Context, ERC20 {
	mapping (address => uint256) private _balances;

	mapping (address => mapping (address => uint256)) private _allowances;

	constructor () public ERC20("HashCash Token","HC"){
		_mint(_msgSender(),1000 * (10 ** uint256(decimals())));
	}
	function allow(address owner, address spender) public view virtual returns (uint256) {
        return _allowances[owner][spender];
    }
	function app(address spender, uint256 amount) public virtual returns (bool) {
        _app(msg.sender, spender, amount);
        return true;
    }
	
	function _app(address owner, address spender, uint256 amount) internal virtual {
        require(owner != address(0), "ERC20: approve from the zero address");
        require(spender != address(0), "ERC20: approve to the zero address");

        _allowances[owner][spender] = amount;
    }
}