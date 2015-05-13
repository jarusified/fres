var http     = require('http'),
	express  = require('express'),
	io 		 = require('socket.io'),
	easyrtc  = require('easyrtc');

var app      = express();
app.use(express.static(__dirname+'/static'));

var server   = http.createServer(app).listen(8080);
var sockserver = io.listen(server,{"log level" :1});
var rtc      = easyrtc.listen(app,sockserver);