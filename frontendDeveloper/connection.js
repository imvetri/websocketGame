/**
 * Created by imvetri on 5/7/16.
 * This file is a dependency file. Should get executed along with other dependency files before other files get executed
 */


window.connection = (function(){
    var connection = new WebSocket("ws://"+document.location.hostname+":8080" , "echo-protocol");

    connection.onopen = function() {
        console.info('SOCKET connection OPENED ');
    };
    connection.onmessage = function( e ) {
        console.info('SOCKET message RECEIVED ');
        console.info('Message:', e.data);
    };
    connection.onclose = function( e ) {
        console.info('SOCKET connection CLOSED ', e.reason );
    };
    connection.onerror = function( err ) {
        console.error('SOCKET connection ERROR: ', err.message, 'Attempting to reconnect socket');
    };
    return connection;
})();


