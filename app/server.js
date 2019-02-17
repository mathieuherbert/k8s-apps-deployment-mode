var http = require('http');
var serveStatic = require('serve-static');
var finalhandler = require('finalhandler');

const COLOR = process.env.COLOR || "red";
var serve = serveStatic('./build/');
//create a server object:
http.createServer(function (req, res) {
  if (req.url == '/color') {
    console.log(COLOR)
    res.write(COLOR);
    res.end(); //end the response
  } else {
    var done = finalhandler(req, res);
    serve(req, res, done);
  }



}).listen(8080); //the server object listens on port 8080