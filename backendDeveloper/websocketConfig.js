/**
 * Created by imvetri on 5/3/16.
 */

//core dependencies
var ws = require('websocket').server;

//custom dependencies
var serverObj = require('./connection').serverObj;
var handleControlOnMessageEvent = require('./messageEventHandler').handleControlOnMessageEvent;

//local variables
var _wsEvent = {
    onMessage: function (message) {

        if (message.type === 'utf8') {
            console.log('Message recieved - ' + message.utf8Data);
            handleControlOnMessageEvent ( message.utf8Data );
        }
    },
    onClose: function (reasonCode, description) {

        console.log('Disconnected ');
    }
};

//websocket functions
var _wsOnConnect = function (request) {

    var connection = request.accept('echo-protocol', request.origin);
    console.log('Request Accepted');

    connection.on('message', _wsEvent.onMessage);
    connection.on('close', _wsEvent.onClose);
};

//websockets variables
var _wsServerObj = new ws({
    httpServer : serverObj,
    autoAcceptConnections : false
});

module.exports = {

    wsServerObj : _wsServerObj,
    wsOnConnect : _wsOnConnect

};