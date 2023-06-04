const Migration = artifacts.require("Migrations");

module.exports = async function (deployer) {
  deployer.deploy(Migration);
};
