const swap = artifacts.require("TokenSwap");
module.exports = async function (deployer) {
  deployer.deploy(swap, 100);
};
