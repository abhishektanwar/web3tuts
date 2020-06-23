var Web3 = require('web3');
var tokenCreator = require('./build/contracts/tokenCreator.json');
var hashCashBackend = require('./build/contracts/hashCashBackend.json');


var init = async () => {
	// var web3 = new Web3('http://127.0.0.1:9545');
	var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:9545'));
	var id = await web3.eth.net.getId();
	var deployedNetwork = hashCashBackend.networks[id];

	var hcContract = new web3.eth.Contract(
		hashCashBackend.abi,
		deployedNetwork.address
	);
	var deployedNetworkToken = hashCashBackend.networks[id];
	var tokenContract = new web3.eth.Contract(
		tokenCreator.abi,
		deployedNetworkToken.address
	);
	// console.log(hcContract);
	console.log('tx hash',deployedNetwork.transactionHash);
	var trx = await web3.eth.getTransaction(deployedNetwork.transactionHash);
	console.log('get TRansaction',trx);
	console.log(typeof trx);
	// console.log('blocknum',trx["blockNumber"]);
	var address = await web3.eth.getAccounts();
	console.log(address);

	var res = await hcContract.methods.hey().send({from:address[0]});
	console.log("res",res);
	var eventres = await hcContract.getPastEvents(
		'heey',
		{
			// filter:{
				// value: 'key'
			// }
			fromBlock:0
		}
	);
	// const ap = await hcContract.methods.approve(address[1],1000).call();
	// console.log('ap',ap);
	// var ar = await hcContract.methods.t().call();
	// console.log('arr',ar);
	var bal = await hcContract.methods.showTokenBal(address[0]).call();
	console.log('bal',bal);
	// var ty = await hcContract.methods.ty().call();
	// console.log(ty);
	var ap = await hcContract.methods.appe(address[0],address[1],19).send({from:address[0]});
	console.log('ap',ap);
	var all = await hcContract.methods.allow(address[0],address[1]).call();
	console.log('all',all);
	var allg = await hcContract.methods.hf(deployedNetwork.address,address[1]).call();
	console.log('allg',allg);
	var allge = await hcContract.methods.hf(address[0],address[1]).call();
	console.log('allge',allge);
	// console.log("eventeafe",eventres);
	// console.log(await web3.eth.getBlockNumber());
	// console.log("token",tokenContract);
	// console.log("approval o/p");
	// var est = await tokenContract.methods.name();
	// console.log(est);
	// var rfg = await tokenContract.methods.balanceOf(address[0].toString()).call();
	// console.log(rfg);
	// const a = await tokenContract.methods.transfer(address[1],{from:address[0],value:1000});
	// console.log('a',a);
	// var approval_receipt = await tokenContract.methods.approve(address[1],1000).send({from:address[0],value:100000});
	// console.log(approval_receipt);
	// var allowance = await tokenContract.methods.allowance(address[0],address[1]).call();
	// console.log(allowance);

}
init();
// https://github.com/HashCash-2/Backend.git

// we can modigy some functions arguments of erc20 contract of open zeppelin according
// to our needs and call those functions in a function of hashCashBackend.sol using 
// HCtokenAddress  ...... changed approve for example replaced msg.sender to owner