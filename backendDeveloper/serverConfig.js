/**
 * Created by imvetri on 5/3/16.
 */

//core dependencies
var http = require('http');

//custom dependencies
var ipConfig = require('./environmentIPConfig');
var respondWithFile = require('./resourceProvider').respondWithFile;


//local variables
var _folderPath = './frontendDeveloper/';

var _indexFile = _folderPath + 'waterIsHere.html',
    _cssFile = _folderPath + 'magicMix.css',
    _jsFile = _folderPath + 'gameStartsHere.js';

var _allowedURLs = {
        '/' : _indexFile,
        '/magicMix.css' : _cssFile,
        '/gameStartsHere.js' : _jsFile
    };

//functions
var serverOnConnection = function( request , response ){

    //resolves request URL
    //TODO move this inside resolve function
    var fileToServe = _allowedURLs[request.url];
    //check whether request URL is available in list of URLS
    if( fileToServe !== undefined ){
        respondWithFile( request , response , fileToServe);
    }
    else{
        response.write(' You will be given no - data ');
        response.end();
        console.log('Request ignored');
    }

};


module.exports = {

    serverObj : http.createServer( serverOnConnection ) ,
    serverPort : ipConfig.port,
    serverIP : ipConfig.ipaddress

};