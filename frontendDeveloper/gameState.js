Window.gameState = (function(){

  var gameState = {
    'PAUSED' : false,
    'ENDED' : false,
    'STARTED' : (function(){
      //if first time game launch, then prompt for player name
      if(window.localStorage.getItem('freshGame') == null){
        window.localStorage.setItem('freshGame' , 'true');
        return true;
      }
    })(),
    'FRESH' : true
  };

  return gameState;
})();
