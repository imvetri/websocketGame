//dependencies
var http = require('http');
//functions
var connectionCallback = function( request , response ){
  console.log('request recieved');
}

//Refer to #1 for under-the-hood working of server listen
http.createServer( connectionCallback ).listen(8080);
//working and add websockets here

/* #1 server
// server object is an eventEmitter object
// Eventemitters are capable of emiting an event and any event listeners linked to this event will execute a callback
// in case of server-eventEmitter it listens to connection event
// this includes request and response  as both of these mean as a conenction

Todo:
following code is tested for request as a connection object and everything seems to be working fine .
need to test the same for response as a connections

var server = http.createServer(),
    requestHandler = function( request , response ) {

        console.log('request '+request);
        console.log('response '+response);

    };
// here connection event is the request event
server
    .listen('8080')
    .on('request' , requestHandler);
*/
