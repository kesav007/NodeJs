var fs = require("fs");
console.log("starting");

// Async
fs.readFile("sample.txt", function(error, data){
	console.log("contents " + data);
});

/*// Sync--> 
var content = fs.readFileSync("sample.txt");
console.log("Content: " + content);
*/
console.log("continue...");