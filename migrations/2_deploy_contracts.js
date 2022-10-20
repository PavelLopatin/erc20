const TronWeb = require('tronweb');

const fs = require('fs');

const filename = process.env.DIRNAME + "/deployed_storage.json";

let deployed = false;
let deployed_storage = {};
try {
  deployed_storage = JSON.parse(fs.readFileSync(filename).toString().trim());
  deployed = true;
} catch (err) {
}

var NewToken = artifacts.require("./contracts/NewToken.sol");

module.exports = async function (deployer) {
  const tronWeb = new TronWeb(
      "http://tron:9090",
      "http://tron:9090",
      "http://tron:9090",
      process.env.TRON_KEY,
  );
  deployer.deploy(NewToken, "USDT Stable", "USDT", "1.0").then(function(instance){
        deployed_storage["tron_usdt"] = tronWeb.address.fromHex(instance.address)
        fs.writeFileSync(filename, JSON.stringify(deployed_storage));
  });


};