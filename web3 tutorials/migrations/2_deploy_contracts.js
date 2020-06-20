const MyContract = artifacts.require("./MyContract.sol");
const sendether = artifacts.require("./sendEther.sol");
const eventContract = artifacts.require("./EVENT.sol");
const testnetConnection = artifacts.require("./testnetConnection.sol");
module.exports =async function(deployer,_,accounts) {
  deployer.deploy(MyContract);
  deployer.deploy(sendether);
  deployer.deploy(eventContract);
  await deployer.deploy(testnetConnection);
  await web3.eth.sendTransaction({
    from:accounts[0],
    to:'0xbE6A55940aF185029a5F3c48808CF2d0b8FEb2Ad',
    value:web3.utils.toWei('1','ether')
  });
};
