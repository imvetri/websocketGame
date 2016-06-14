/**
 * Created by imvetri on 5/7/16.
 * This file is a dependency file. Should get executed along with other dependency files before other files get executed
 */


window.connection = (function(){


    //8080 for local testing and 8000 for deployment on openshift cloud

    var connection = new WebSocket("ws://"+document.location.hostname+":8080" , "echo-protocol");

    //variables
    connection.messages = [];

    //events
    connection.onopen = function() {
        console.info('SOCKET connection OPENED ');
    };
    connection.onmessage = function( e ) {
        console.info('SOCKET message RECEIVED ');
        judgeEvent( e.data );
    };
    connection.onclose = function( e ) {
        console.info('SOCKET connection CLOSED ', e.reason );
    };
    connection.onerror = function( err ) {
        console.error('SOCKET connection ERROR ', err.message, 'Attempting to reconnect socket');
    };

    //bossue, illi bug irudhey
    //actions
    connection.post = function ( message ) {
        // ques the messages
        this.queue( message );
        if( this.readyState === this.OPEN )
            this.sendAll();
    };

    connection.queue = function ( message ) {
        this.messages.push( message );
    };
    connection.dequeue = function (){
        return this.messages.shift();
    };
    connection.sendAll = function(){
        while( this.messages.length != 0){
            this.send(this.dequeue());
        }
    };
    return connection;
})();
