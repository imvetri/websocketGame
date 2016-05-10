/**
 * Created by imvetri on 5/7/16.
 * This file is a dependency file. Should get executed along with other dependency files before other files get executed
 */

Window.player = (function() {
    var player = {
        score: 0,
        DOM: "DOM",
        init: function () {
            var ls = localStorage;
            //if first time game launch, then prompt for player name
            if(ls.getItem('freshGame') == null){
              ls.setItem('freshGame' , 'true');
              Window.gameState['STARTED'] = true;
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
