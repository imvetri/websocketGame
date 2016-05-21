/**
 * Created by imvetri on 5/7/16.
 *
 * Player - global object
 */

Player = (function() {

    //playrID will be used in the future
    var Player = function( playerDetails ){
        this.playerIP = playerDetails.playerIP ;
        this.name = playerDetails.playerName ;
        this.id = playerDetails.playerID ;
        this.score = Number ( playerDetails.playerScore );
    };
    Player.prototype.increaseScore = function () {
        this.score = 1 + this.score ;
    };
    return Player;
})();


module.exports.Player = Player;