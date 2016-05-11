/**
 * Created by imvetri on 5/7/16.
 * This file is a dependency file. Should get executed along with other dependency files before other files get executed
 */

window.player = (function() {
    var player = {
        score: 0,
        DOM: "DOM",
        init: function () {
          if( window.gameState['FRESH'] ){
            var playetName = window.prompt();
            window.gameState.setPlayerName( playetName );
          }
            // else do nothing
        },
        initScore: function () {
            //if player already exists, update the score
            // else do nothing
        },
        increaseScore: function () {
            //if game connection succeded, send currentScore+1
        }
    };

    return player;
})();
