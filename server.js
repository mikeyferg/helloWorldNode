var http = require('http');
var server = http.createServer(function(req, res){
	//our hello word response will go here
	res.write("Hello World");
	res.end();
});
server.listen(9000, function() {
	console.log('listening on port 9000')
});

