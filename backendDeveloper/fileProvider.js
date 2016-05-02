/**
 * Created by imvetri on 5/3/16.
 */

//dependencies
var fs = require('fs');

//local variables
var fileTypes = {
    '/' : 'html',
    'css' : 'css',
    'js' : 'javascript'
};


//local functions
var getResponseHead = function( request , data ) {
    var responseHead =  {
        'Content-Type' : 'text/'+fileTypes[request.url.split('.').pop()] ,
        'Content-Length' : data.length
    };
    return responseHead;

};

//file read and serve in response
var respondWithFile = function( request , response , file ){

    var readCompleteCallback = function( err , data ){

        response.writeHead( 200 , getResponseHead( request , data ) );
        response.write( data );
        response.end();
        console.log( 'File read complete... ' + file);
    };
    fs.readFile( file , readCompleteCallback );
};

module.exports.respondWithFile = respondWithFile;