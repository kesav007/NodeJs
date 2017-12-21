var http = require("http");
var fs = require("fs");
console.log("Started..");
// var host = "127.0.0.1";
// var port = "1337";
var config = JSON.parse(fs.readFileSync("config.json"));
var host = config.host;
var port = config.port;

var server = http.createServer(function(req, res) {
	console.log("Received Request: " + req.url);
	fs.readFile("public" + req.url, function(error, data) {
		if (error) {
			res.writeHead(404, {
				"content-type" : "text/plain"
			});
			res.end("Sorry the page is not found.");
		} else {
			res.writeHead(200, {
				"content-type" : "text/html"
			});
			res.end(data);
		}
	});

});

server.listen(port, host, function() {
	console.log("Listening " + host + ":" + port);
});

fs.watchFile("config.json", function(current, previous) {
	config = JSON.parse(fs.readFileSync("config.json"));
	host = config.host;
	port = config.port;
	server.close();
	server.listen(port, host, function() {
		console.log("Now Listening " + host + ":" + port);
	});

});