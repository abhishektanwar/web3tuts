pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract hashCashBackendb {
	
	IERC20 private HCtokenAddress;

	event depositEvent(address from,uint256 tokenAmount);
	constructor (IERC20 _tokenAddress) public {
		HCtokenAddress = _tokenAddress;
	}


	function showTokenBal(address _userAdd)public view returns(uint256) {
		uint256 a;
		a= HCtokenAddress.balanceOf(_userAdd);
		return a;
	}
	function hey() public view returns(string memory){
		return 'hey';

	}
	function thisaddress()public view returns(address){
		return address(this);
	}
	//deposit 
	//approve and transferFrom
	function app(uint _amount) public {
		HCtokenAddress.approve(address(this), _amount);
	}
	function depositTokens() public {
//		HCtokenAddress.approve(address(this),_amount);
		HCtokenAddress.transferFrom(msg.sender, address(this), 100);

		// emit depositEvent(msg.sender, _amount);

	}
	
	function withdrawToken(uint _amount) public {
		
	}
	//withdraw

}
//0x7fF01A8833A4c251399dC0161054455b4df9c234