const Nfts = artifacts.require("PartnerNftStaking");

module.exports = async function (deployer) {
  deployer.deploy(Nfts);
};
