pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/GSN/Context.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
contract hashCashBackend {
	IERC20 private HCtokenAddress;
	//mapping( userAddress => mapping( tokenAddress => value))
	mapping(address => mapping(address => uint256)) userDeposits;
	//mapping( userAddress => mapping( tokenAddress => boolean))
	mapping(address => mapping(address => bool)) userDepositBoolean;
	mapping (address => uint256) private _balances;

	mapping (address => mapping (address => uint256)) private _allowances;
	event depositEvent(address from,uint256 tokenAmount);
	event heey(address from,uint date);
	constructor (IERC20 _tokenAddress) public {
		HCtokenAddress = _tokenAddress;
	}
	function allow(address owner, address spender) public view virtual returns (uint256) {
        return _allowances[owner][spender];
    }
	function appr(address spender, uint256 amount) public virtual returns (bool) {
        _app(msg.sender, spender, amount);
        return true;
    }
	function _app(address owner, address spender, uint256 amount) internal virtual {
        require(owner != address(0), "ERC20: approve from the zero address");
        require(spender != address(0), "ERC20: approve to the zero address");

        _allowances[owner][spender] = amount;
    }

	function showTokenBal(address _userAdd)public view returns(uint256) {
		uint256 a;
		a = HCtokenAddress.balanceOf(_userAdd);
		return a;
	}
	function hey() public returns(string memory){
		emit heey(msg.sender,now);

		return 'hey';
		
	}
	function ty() public view returns (string memory) {
		string memory bv;
		bv = HCtokenAddress.symbol();
		return bv;
	}
	function thisaddress() public view returns(address){
		return address(this);
	}
	//deposit
	//approve and transferFrom
	function appe(address owner,address spender,uint256 _amount) public returns(bool) {
		bool status;
		status=HCtokenAddress.approve(owner,spender, _amount);
		return status;
	}
	function hf(address owner, address spender) public view virtual returns (uint256) {
		uint256 b;
        b=HCtokenAddress.allowance(owner,spender);
		return b;
    }
	function depositTokens(address _userAddress,uint256 _amount,address tokenTypeAddress) public {
		uint256 userBal;
		userBal = showTokenBal(msg.sender);
		require(userBal >= _amount);
		// HCtokenAddress.approve(address(this),_amount);
		HCtokenAddress.transferFrom(msg.sender, address(this), _amount);
		// if(userDepositBoolean[msg.sender][tokenTypeAddress] == true){
		// 	userDeposits[msg.sender][tokenTypeAddress] = userDeposits[msg.sender][tokenTypeAddress] + _amount;
		// }
		// else {
		// 	userDepositBoolean[msg.sender][tokenTypeAddress] = true;
		// 	userDeposits[msg.sender][tokenTypeAddress] = userDeposits[msg.sender][tokenTypeAddress] + _amount;
		// }
		emit depositEvent(msg.sender, _amount);

	}
	//token contract will approve
	function withdrawToken(uint _amount,address tokenTypeAddress) public returns(bool) {
		if(userDepositBoolean[msg.sender][tokenTypeAddress] == true){
			uint256 userBal;
			userBal = showTokenBal(msg.sender);
			require(_amount <= userBal);
			HCtokenAddress.transferFrom(address(this),msg.sender,_amount);
			return true;
		}
		else{
			return false;
		}
	}
	//withdraw

}
//0x7fF01A8833A4c251399dC0161054455b4df9c234
//approve,function app call from hashCashBackend not working but working from token contract
//maintain a deposit field ? for withdraw purpose?

