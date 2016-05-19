//core dependencies


//custom dependencies
var connection = require('./connection'),
    wsConfig = require('./websocketConfig');

//server local variables
var _serverObj = connection.serverObj,
    _serverIP = connection.serverIP,
    _serverPort = connection.serverPort;

//server executions
_serverObj.listen( _serverPort , _serverIP , ()=> console.log('Server Listening at port '+ _serverPort) );

//ws local variables
var _wsServerObj = wsConfig.wsServerObj,
    _wsOnConnect = wsConfig.wsOnConnect;


//webserver executions
_wsServerObj.on( 'request' , _wsOnConnect );
