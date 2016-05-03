//core dependencies


//custom dependencies
var serverConfig = require('./serverConfig'),
    wsConfig = require('./websocketConfig');

//server local variables
var _serverObj = serverConfig.serverObj,
    _serverIP = serverConfig.serverIP,
    _serverPort = serverConfig.serverPort;

//server executions
_serverObj.listen( _serverPort , _serverIP , ()=> console.log('Server Listening at port '+ _serverPort) );

//ws local variables
var _wsServerObj = wsConfig.wsServerObj,
    _wsOnConnect = wsConfig.wsOnConnect;


//webserver executions
_wsServerObj.on( 'request' , _wsOnConnect );
