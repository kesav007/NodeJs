var fs = require("fs");
console.log("starting...");
fs.writeFileSync("write.txt", "Hello world");
console.log("Finsh...")
