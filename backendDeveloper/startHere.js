/*
 Todo
 1. rename this as "startHere.js"
 2. create seperate package for dependencies and import it here
 4. create speerate package for websocket and import it here

 this file should enable reader to see only server start and websocket start.
 hide the logics from here.
 */
//dependencies
var http = require('http'),
    ws = require('websocket').server,
    respondWithFile = require('./fileProvider').respondWithFile;

//upon refactoring - remove this to external file
var folderPath = './frontendDeveloper/',
    indexFile = folderPath + 'waterIsHere.html',
    cssFile = folderPath + 'magicMix.css',
    jsFile = folderPath + 'gameStartsHere.js',
    listOfURLs = {
        '/' : indexFile,
        '/magicMix.css' : cssFile,
        '/gameStartsHere.js' : jsFile
    };

//move to server-content only file
//functions
var serverConnectionCallback = function( request , response ){

    var fileToServe = listOfURLs[request.url];
    //check whether request URL is available in list of URLS
    if( fileToServe !== undefined ){
        respondWithFile( request , response , fileToServe);
    }
    else{
        response.write(' You will be given no - data ');
        response.end();
        console.log('Request ignored');
    }

};

// Dont move to
//server variables
var server = http.createServer( serverConnectionCallback ) ,
    serverPort = '8080';

//move outside
//openshift configuration
var ipaddress = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
var port      = process.env.OPENSHIFT_NODEJS_PORT || 8080;

//move outside to websocket file
//websockets variables
var wsServer = new ws({
    httpServer : server,
    autoAcceptConnections : false
});

//move to websockt file
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

//dont move
//server executions
server.listen(port , ipaddress , ()=> console.log('Server Listening at port '+serverPort)); //Refer to #1 for under-the-hood working of server listen

//dont move
//webserver executions
wsServer.on( 'request' , wsSetting.connection );
