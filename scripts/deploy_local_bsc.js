const {ethers, run } = require("hardhat");
const fs = require('fs');

const filename = process.env.DIRNAME + "/deployed_storage.json";

let deployed = false;
let deployed_storage = {};
try {
  deployed_storage = JSON.parse(fs.readFileSync(filename).toString().trim());
  deployed = true;
  console.log(deployed_storage);
} catch (err) {
  console.log("No ", filename, ' Let\'s deploy contracts');
}

async function createOrGetContract() {
  let token = await ethers.getContractFactory("NewToken");
  token = await token.deploy();
  await token.deployed();
  console.log('bsc_usdc: ' + token.address);
  deployed_storage[token.network] = token.address;
  fs.writeFileSync(filename, JSON.stringify(deployed_storage));
}

async function main() {
  const NewToken = await createOrGetContract();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });