/**
 * Created by imvetri on 5/7/16.
 * This file is a dependency file. Should get executed along with other dependency files before other files get executed
 */

window.Player = (function() {

    var Player = function( name , score ){
      this.name = name;
      this.score = score;
    };
    Player.prototype.increaseScore = function () {
      this.score += 1 ;
    };

    return Player;
})();
