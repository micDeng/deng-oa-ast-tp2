var users = require('./users.js');

module.exports = {
  
    logic: function (req, res) {

    	console.log("Current URL : " + req.url);

      		if (req.url == "/save") {
		    	users.save("userName", "userPassword", function (){
		      		res.writeHead(201, {'Content-Type': 'text/plain'});
		      		res.end('User is saved !');
      			});
      		} else if (req.url == "/get") {
      			users.get("userName", function (){
			        res.writeHead(200, {'Content-Type': 'text/plain'});
			        res.end('Got the user !');
      			});
      		} else if (req.url == "/") {
			    res.writeHead(200, {'Content-Type': 'text/plain'});
			    res.end('Welcome !');     			
      		} else {
      			res.writeHead(404, {'Content-Type': 'text/plain'});
      			res.end('Route not found !');
      		}

    },
    port: "8888", 
    address: "127.0.0.1"
}
