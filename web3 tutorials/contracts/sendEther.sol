pragma solidity ^0.5.1;

contract sendEther{
	string public functionCalled;
	function Ether() external payable {
		functionCalled = 'sendEther';
	}

	function () external payable {
		functionCalled = 'fallback';
	}
}