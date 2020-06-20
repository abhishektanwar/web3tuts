//demo for using testnet KOVAN/ROPSTEN or any other

pragma solidity ^0.5.1;

contract testnetConnection{
	uint data;

	function setData(uint _data) external {
		data = _data;
	}
	function getData () external view returns(uint) {
		return data;
	}
}