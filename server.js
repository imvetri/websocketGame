var http = require('http');

var server = http.createServer(),
    requestHandler = function( request , response ) {

        console.log('request '+request);
        console.log('response '+response);

    };

server
    .listen('8080')
    .on('request' , requestHandler);

