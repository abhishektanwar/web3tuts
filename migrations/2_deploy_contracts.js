const hashCashBackend = artifacts.require('./hashCashBackend.sol');
const hashCashBackendb = artifacts.require('./hashCashBackendb.sol');
const tokenCreator = artifacts.require('./tokenCreator.sol');

module.exports = async function(deployer, _network, accounts) {

	await deployer.deploy(tokenCreator);
	const token = await tokenCreator.deployed();
	await deployer.deploy(hashCashBackend, token.address);
	await deployer.deploy(hashCashBackendb, token.address);
};