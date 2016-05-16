/**
 * Created by imvetri on 5/7/16.
 * This file is a dependency file. Should get executed along with other dependency files before other files get executed
 */


//pass game status only to thisplayer.
var Player = function( playerName , playerID , playerScore ){
    this.name = playerName ;
    this.id = playerID ;
    this.score = Number ( playerScore );
};
Player.prototype.increaseScore = function () {
    this.score = 1 + this.score ;
};

module.exports.Player = Player;
