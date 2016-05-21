/**
 * Created by imvetri on 5/3/16.
 */
//global variable - Game
//core dependencies
var ws = require('websocket').server;

//custom dependencies
var serverObj = require('./connection').serverObj;
var handleControlOnMessageEvent = require('./messageEventHandler').handleControlOnMessageEvent;

//local variables
var _wsEvents = {
    onMessage: function (message) {
        if (message.type === 'utf8') {
            handleControlOnMessageEvent ( message.utf8Data );
        }

        var ackToken = {
            eventName:'OTHERS_SCORE'
        };
        this.send(JSON.stringify(ackToken));
    },
    onClose: function (reasonCode, description) {
        console.log('Disconnected ');
    }
};

//websocket functions
var _wsOnConnect = function (request) {

    var connection = request.accept('echo-protocol', request.origin);
    console.log('Request Accepted' , request.origin );

    //on new socket request associate a player tothat ip address
    var remotePlayer = request.socket.remoteAddress ;
        console.log('REMOTE PLAYER',remotePlayer);
    //bind events to ws
    connection.on('message', _wsEvents.onMessage);
    connection.on('close', _wsEvents.onClose);
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