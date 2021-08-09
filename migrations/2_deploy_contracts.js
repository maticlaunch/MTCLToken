var MaticLaunchToken = artifacts.require("./MaticLaunchToken.sol");

module.exports = async function (deployer) {
  await deployer.deploy(MaticLaunchToken);
};