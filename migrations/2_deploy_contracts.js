const fs = require('fs');
let filename;
const TronWeb = require('tronweb');

if (process.env.DIRNAME){
  filename = process.env.DIRNAME + "/deployed_storage.json";
} else {
  filename = __dirname + "/deployed_storage.json";
}


let deployed = false;
let deployed_storage = {};
try {
  deployed_storage = JSON.parse(fs.readFileSync(filename).toString().trim());
  deployed = true;
  console.log(deployed_storage);
} catch (err) {
  console.log("No ", filename, ' Let\'s deploy contracts');
}

var NewToken = artifacts.require("./contracts/NewToken.sol");

module.exports = async function (deployer) {
  const tronWeb = new TronWeb(
      process.env.RPC_TRON,
      process.env.RPC_TRON,
      process.env.RPC_TRON,
      process.env.TRON_KEY,
  );
  deployer.deploy(NewToken, "USDT Stable", "USDT", "1.0").then(function(instance){
        deployed_storage["tron_usdt"] = tronWeb.address.fromHex(instance.address)
        fs.writeFileSync(filename, JSON.stringify(deployed_storage));
  });


};