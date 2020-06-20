// I: making send txn

// var Web3= require('web3');
// var myContract = require('./build/contracts/MyContract.json');
// // var web3 = new Web3('http://localhost:7545');
// //or
// var init = async () => {
// 	var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:9545'));
// 	var id = await web3.eth.net.getId();
// 	var deployedNetwork = myContract.networks[id];
// 	// web3.eth.getBlockNumber().then(()=> console.log('done'));
// 	// console.log(id);
// 	// console.log(deployedNetwork.address);
// 	var contract = new web3.eth.Contract(
// 		myContract.abi, // abi
// 		deployedNetwork.address // address of deployed contract
// 	);
// 	var addresses = await web3.eth.getAccounts();
// 	console.log(addresses);
// 	console.log(contract);
// 	var result = await contract.methods.getData().call();
// 	console.log(result);

// 	var receipt = await contract.methods.setData(10).send({
// 		from:addresses[0],
// 	});
// 	console.log(receipt);
// 	var result = await contract.methods.getData().call();
// 	console.log(result);
	
// };

// init();

// II : sending ethers to a smart contract and regular address

// var Web3 = require('web3');
// var etherContract = require('./build/contracts/sendEther.json');


// var init = async () => {
// 	var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:9545'));
// 	var id = await web3.eth.net.getId();
// 	var deployedNetwork = etherContract.networks[id];

// 	var contract = new web3.eth.Contract(
// 		etherContract.abi,
// 		deployedNetwork.address
// 	);

// 	var addresses = await web3.eth.getAccounts();

// 	await contract.methods.Ether().send({
// 		from:addresses[0],
// 		value: '100000'
// 	});

// 	console.log(await contract.methods.functionCalled().call());

// 	//sending ether to an address
// 	var res = await web3.eth.sendTransaction({
// 		from:addresses[0],
// 		to:addresses[1],
// 		value : '100000'
// 	});
// 	var b1 = await web3.eth.getBalance(addresses[0]);
// 	var b2 = await web3.eth.getBalance(addresses[1]);
// 	console.log(b1,b2);
// }

// init();

// event listening

var Web3 = require('web3');

var eventContract = require('./build/contracts/EVENT.json');

var init = async () => {
	var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:9545'));
	var id = await web3.eth.net.getId();
	var deployedNetwork = eventContract.networks[id];

	var contract = new web3.eth.Contract(
		eventContract.abi,
		deployedNetwork.address
	);
	var addresses = await web3.eth.getAccounts();
	//method1 : by this method you can only read events created by you
	var receipt = await contract.methods.enitEvent('hey').send({
		from:addresses[0]
	});
	await contract.methods.enitEvent('hey hey').send({
		from:addresses[0]
	});
	console.log(receipt.events);

	//2nd method

	var results = await contract.getPastEvents(
		'myEvent', //name of event
		{fromBlock:0} //takes blocknumber from which event has to be read
	);
	console.log(results);
}

init();