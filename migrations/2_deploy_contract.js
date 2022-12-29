const Nfts= artifacts.require("NftMarket");

module.exports = async function(deployer) {
   
  deployer.deploy(Nfts);
};
