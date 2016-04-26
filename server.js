//dependencies
var http = require('http'),
    ws = require('websocket').server;


//functions
var serverConnectionCallback = function( request , response ){
        console.log('Request received at the server');
        response.writeHead('200');
        response.end();
    };

//server variables
var server = http.createServer( serverConnectionCallback ) ,
    serverPort = '8080';


//websockets variables
var wsServer = new ws({
        httpServer : server,
        autoAcceptConnections : false
    });

//websocket functions
var onMessageCallback = function( message ){
        if( message.type === 'utf8' ) {
            console.log( 'Message recieved - ' + message.utf8Data );
            connection.sendUTF( message.utf8Data );
        }
        else if( message.type === 'binary' ){
            console.log( 'Message received lenght of ' + message.binaryData.length );
            connection.sendBytes( message.binaryData );
        }
    },
    onCloseCallback = function( reasonCode , description ){
        console.log( 'Disconnected ');
    },
    websocketCallback = function( request ){

        if( !isOriginAllowed( request.origin ) ){
            request.reject();
            return;
        }

        var connection = request.accept( 'echo-protocol' , request.origin );
        console.log('Request Accepted');

        connection.on( 'message' , onMessageCallback );
        connection.on( 'close' , onCloseCallback )
    },
    isOriginAllowed = function( origin ){
        return true;
    };


//server executions
server.listen(serverPort , ()=> console.log('Server Listening at port '+serverPort)); //Refer to #1 for under-the-hood working of server listen


//webserver executions
wsServer.on( ' request' , websocketCallback );
