//core dependencies

//globals
require('./game');


//custom dependencies
var connection = require('./connection'),
    wsConnection = require('./wsConnection');

//server local variables
var serverObj = connection.serverObj,
    serverIP = connection.serverIP,
    serverPort = connection.serverPort;

//server executions
serverObj.listen( serverPort , serverIP , ()=> console.log('Server Listening at port '+ serverPort) );

//ws local variables
var wsServerObj = wsConnection.wsServerObj,
    wsOnConnect = wsConnection.wsOnConnect;


//webserver executions
wsServerObj.on( 'request' , wsOnConnect );
