/**
 * Created by imvetri on 5/7/16.
<<<<<<< HEAD
 * This file is a dependency file. Should get executed along with other dependency files before other files get executed
 */

//playrID will be used in the future
var Player = function( playerDetails ){
    this.playerIP = playerDetails.playerIP ;
    this.name = playerDetails.playerName ;
    this.id = playerDetails.playerID ;
    this.score = Number ( playerDetails.playerScore );
    this.connection = playerDetails.connection;
};
Player.prototype.increaseScore = function () {
    this.score = 1 + this.score ;
};


module.exports.Player = Player;
