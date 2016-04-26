//dependencies
var http = require('http'),
    ws = require('websocket').server;


//functions
var connectionCallback = function( request , response ){
        console.log('Request received at the server');
        response.writeHead('200');
        response.end();
    },
    isOriginAllowed = function( origin ){
        return true;
    };

//variables
var server = http.createServer( connectionCallback ),
    wsServer = new ws({
        httpServer : server,
        autoAcceptConnections : false
    }),
    serverPort = '8080';

//executions
server.listen(serverPort , ()=> console.log('Server Listening at port '+serverPort)); //Refer to #1 for under-the-hood working of server listen


//working and add websockets here
