/**
 * Created by imvetri on 5/3/16.
 */

//core dependencies
var http = require('http');

//custom dependencies
var ipConfig = require('./environmentIPConfig');
var respondWithFile = require('./resourceProvider').respondWithFile;

//functions
var serverOnConnection = function( request , response ){

    respondWithFile( request , response );

};


module.exports = {

    serverObj : http.createServer( serverOnConnection ) ,
    serverPort : ipConfig.port,
    serverIP : ipConfig.ipaddress

};