var fs = require("fs");
console.log("Started..");
var config = JSON.parse(fs.readFileSync("config.json"));
var users = JSON.parse(fs.readFileSync("users.json"));
console.log("Listening to http://" + config.host + ":" + config.port);
var host = config.host;
var port = config.port;

var express = require("express");
var http = require("http");
var app = express();
var router = express.Router();
app.use(express.static(__dirname + '/public'));
http.createServer(app).listen(port);
app.get("/hello/:param", function(req, res){
	res.send("Hello " + req.params.param);
});
app.get("/user/:id", function(req, res){
	var user = users[req.params.id];
	res.send("Hello " + user.first + " " + user.last);
});
