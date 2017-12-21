var fs = require("fs");
var config = fs.readFileSync("config.json");
console.log("" + config);
var configur = JSON.parse(config);
console.log(configur);
console.log(configur.username);