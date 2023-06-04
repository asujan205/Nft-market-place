const swap = artifacts.require("nftSwap");

module.exports = async function (deployer) {
  deployer.deploy(swap);
};
