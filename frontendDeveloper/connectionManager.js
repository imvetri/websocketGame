/**
 * Created by imvetri on 5/7/16.
 * This file is a dependency file. Should get executed along with other dependency files before other files get executed
 */


window.webSocketConnectionManager = (function(){
    var connectionManagerObj = {
        socket : new WebSocket("ws://localhost:8080" , "echo-protocol"),
        send : function( payload ){
            this.socket.send( payload );
        },
        close : function(){
            //before window close, bind this function
        },
        onError : function(){
            //on connection failure try reconnect
            //on connection failure keep listening to score. this will provide offline scoring as well
            //on reconnection update the score
        },
        reconnect : function(){

        }
    };

    return connectionManagerObj;

})();
