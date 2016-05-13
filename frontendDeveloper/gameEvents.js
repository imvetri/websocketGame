
/**
 * Created by imvetri on 5/7/16.
 * This file is a dependency file. Should get executed along with other dependency files before other files get executed
 */
window.game = {
    /*
    send game status to server in the format of {PLAYER : SCORE}
    example {"vetri" : 200 }
    */
      sendGameStatus : function( WebSocketConnectionManager , playerState ){
          WebSocketConnectionManager.send( playerState );
      },
    /*
    receive payload from using socket
    */
      receiveGameStatus : function( WebSocketConnectionManager  ){

      }
    }
