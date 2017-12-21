var fs = require("fs");
console.log("Starting....");
var config = JSON.parse(fs.readFileSync("config.json"));
console.log(config);

fs.watchFile("config.json", function(current, previous) {
	config = JSON.parse(fs.readFileSync("config.json"));
	console.log(config);
});