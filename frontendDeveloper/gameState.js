
/**
 * Created by imvetri on 5/7/16.
 * This file is a dependency file. Should get executed along with other dependency files before other files get executed
 */
window.gameState = (function(){
  var gameState = {
    'PAUSED' : false,
    'ENDED' : false,
    'STARTED' : false,
    'FRESH' : (function(){
                //if first time game launch, then prompt for player name
                if(window.localStorage.getItem('freshGame') == null){
                  window.localStorage.setItem('freshGame' , 'true');
                  return true;
                }
                else {
                  return false;
                }
              })(),
    'setPlayerName' : function(playerName){
      window.localStorage.setItem('playerName',playerName );
    }
    };
  return gameState;
})();
