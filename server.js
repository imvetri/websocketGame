//dependencies
var http = require('http'),
    ws = require('websocket').server;


//functions
var serverConnectionCallback = function( request , response ){
        console.log('Request received at the server');
        response.writeHead('200');
        response.write('hellow there , welcome to my world');
        response.end();
    };

//server variables
var server = http.createServer( serverConnectionCallback ) ,
    serverPort = '8080';

//openshift configuration
var ipaddress = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
var port      = process.env.OPENSHIFT_NODEJS_PORT || 8080;

//websockets variables
var wsServer = new ws({
        httpServer : server,
        autoAcceptConnections : false
    });

//websocket functions
var wsSetting = {

    connection: function (request) {

        var connection = request.accept('echo-protocol', request.origin);
        console.log('Request Accepted');

        connection.on('message', wsSetting.eventCallbacks.onMessage);
        connection.on('close', wsSetting.eventCallbacks.onClose);
    },

    eventCallbacks: {
        onMessage: function (message) {
            if (message.type === 'utf8') {
                console.log('Message recieved - ' + message.utf8Data);
            }
        },
        onClose: function (reasonCode, description) {
            console.log('Disconnected ');
        }
    }
};

//server executions
server.listen(port , ipaddress , ()=> console.log('Server Listening at port '+serverPort)); //Refer to #1 for under-the-hood working of server listen


//webserver executions
wsServer.on( 'request' , wsSetting.connection );
