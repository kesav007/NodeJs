var https = require("https");
function getRepo(userName, callback){
	var options = {
			method : "GET",
			hostname : "api.github.com",
			path : "/users/" + userName +"/repos",
			headers: { 'User-Agent': "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:57.0) Gecko/20100101 Firefox/57.0" }
		}
		var request = https.request(options, function(response) {
			var body = '';
			var respos = []
			response.on('data', function(chunk) {
				body += chunk.toString('utf8');
			});	
			response.on("end", function(){
				var config = JSON.parse(body);		
				config.forEach(function(item){
					respos.push(item.name);
				});
				callback(respos);
			});
		});
		request.end();	
}

getRepo("kesav007", function(repos){
	console.log("Kesav007 number of repos " + repos);
});
getRepo("seekesav", function(repos){
	console.log("Seekesav number of repos " + repos);
});