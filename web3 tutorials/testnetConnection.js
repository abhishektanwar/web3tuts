// using hdwalletProvider for local development blockchain ganache
// var Web3 = require('web3');
// var myContract = require('./build/contracts/testnetConnection.json');
// var HDWalletProvider = require('@truffle/hdwallet-provider');
// var init = async () => {
// 	// var account = await web3.eth.accounts.create();
// 	// var address = account.address;
// 	// var privateKey = account.privateKey;
// 	var address = '0xbE6A55940aF185029a5F3c48808CF2d0b8FEb2Ad';
// 	var privateKey = "0xd29d586b540fc56b6314b1e61a6297268630d76af28e1a88d0aec7918178b6d3";
// 	var provider = new HDWalletProvider(
// 		privateKey,
// 		'http://localhost:9545'
// 	);
// 	var web3 = new Web3(provider);

// 	var id = await web3.eth.net.getId();
// 	var deployedNetwork = myContract.networks[id];
// 	var contract = new web3.eth.Contract(
// 		myContract.abi,
// 		deployedNetwork.address
// 	);
// 	// console.log(contract);

// 	await contract.methods.setData(10).send({from:address});
// 	var result = await contract.methods.getData().call();
// 	console.log(result);
	

// }

// init();

//deploying on ropsten

var Web3 = require('web3');
var myContract = require('./build/contracts/testnetConnection.json');
var HDWalletProvider = require('@truffle/hdwallet-provider');
var init = async () => {
	// var account = await web3.eth.accounts.create();
	// var address = account.address;
	// var privateKey = account.privateKey;
	var address = '0xbE6A55940aF185029a5F3c48808CF2d0b8FEb2Ad';
	var privateKey = "0xd29d586b540fc56b6314b1e61a6297268630d76af28e1a88d0aec7918178b6d3";
	var provider = new HDWalletProvider(
		privateKey,
		'http://localhost:9545'
	);
	var web3 = new Web3(provider);

	var contract = new web3.eth.Contract(
		myContract.abi,
	);
	contract = await contract.deploy({data:myContract.bytecode}).send({from:address});
	// console.log(contract);
	console.log(contract);
	await contract.methods.setData(12).send({from:address});
	var result = await contract.methods.getData().call();
	console.log(result);
	

}

init();