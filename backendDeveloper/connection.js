/**
 * Created by imvetri on 5/3/16.
 */

//core dependencies
var http = require('http');

//custom dependencies
var ipConfig = require('./environmentIPConfig');
var respondWithFile = require('./resourceProvider').respondWithFile;
var noOfConnections = require('./globalVariables');


//functions
var serverOnConnection = function( request , response ){
    respondWithFile( request , response );
    global.noOfConnections = global.noOfConnections + 1;
    //console.log('New connections ! ');
    //console.log('Total Conenctions = ' + global.noOfConnections );
};


module.exports = {

    serverObj : http.createServer( serverOnConnection ) ,
    serverPort : ipConfig.port,
    serverIP : ipConfig.ipaddress
};