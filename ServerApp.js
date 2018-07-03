/*
 * information
 *
 * NPM install
 * https://www.npmjs.com/package/date-util
 * https://www.npmjs.com/package/socket.io
 * socket.io version 1.7.4
 */
var tcpServer = require('net').createServer();
var httpServer = require('http').createServer();
var io = require('socket.io')(httpServer);
var inspect = require('util').inspect;
require('date-util');
var dt = new Date().format("[HH:MM:ss]");  
var tcpPort = 5004;
var httpPort = 3001;
var globalData;

tcpServer.listen(tcpPort, function(){
    console.log(dt + " TCP Server Start");
});

httpServer.listen(httpPort, function(){
    console.log(dt + " SocketIo Server Start");
});

tcpServer.on('connection', function(socket){
    console.log(dt + " ** TCP Connection");
  		
    socket.on('data', function(data){
    	console.log(dt + " << TCP // " + data.toString());	
    	globalData = data;
    });

    socket.on('close', function(){
        console.log(dt + " ** TCP Disconnted");
        socket.destroy();
    });
});

io.on('connection', function(socket){
    console.log(dt + " @@ SocketIo Connection");

	socket.on('re', function(){
		if(globalData != undefined && !globalData){
			console.log(dt + " >> SocketIo // " + globalData.toString());	
			socket.emit('result', globalData.toString());
			globalData = null;		
		} else {
			console.log(dt + " @@ SocketIo Not Transmission");				
		}
	});

    socket.on('close', function(){
        console.log(dt + " @@ SocketIo Disconnted");
        socket.destroy();
    });
});