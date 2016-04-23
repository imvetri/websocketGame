//dependencies
var http = require('http');
//functions
var connectionCallback = function( request , response ){
  console.log('request recieved');
}


http.createServer( connectionCallback ).listen(8080);

/* following explains in detail how server starts.

// server is an eventEmitter object
// it listens to connection event
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
