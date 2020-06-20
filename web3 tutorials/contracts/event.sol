pragma solidity ^0.5.1;
// events reading
contract EVENT{
	event myEvent (
		uint indexed id,
		uint indexed date,
		string value
	);
	uint nextId;

	function enitEvent(string calldata value) external {
		emit myEvent(nextId,now,value);
		nextId++;
	}
}