require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: "0.8.4",

  networks: {
    "goerli": {
       url: "https://opt-goerli.g.alchemy.com/v2/lvaosE6govB90jixDO9NNGH_7JfP5MSD",
       accounts: ["63d4f3dd68ec2dd3d2dfbea80c7bc590c6e9c8b81b10680a4be1361436571f84"]
    }
  }

};
