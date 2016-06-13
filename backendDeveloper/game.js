/*
 * Created by imvetri on 5/19/16.
 *
 * Game - global object
 * Game will keep track of only online players
 */

//local dependencies

var Player = require('./player');
Player = Player.Player;


var Game = function(){

};

Game.prototype.players = {};

Game.prototype.addPlayer = function( playerDetails ){
    var newPlayer = new Player( playerDetails );
    this.players[ newPlayer.id ] = newPlayer;
};

Game.prototype.delPlayer = function( playerDetails ){
    var id = playerDetails.playerID;
    delete this.players[id];
};

Game.prototype.scoreUpPlayer = function( playerDetails ){
    this.players[ playerDetails.playerID].score +=  1;
};

Game.prototype.broadcastPlayer = function( scoredPlayerDetail ){
    console.log('this.players  ');
    var allPlayers = this.players;

    var broadcastExceptSourcePlayer = function( thisPlayer ){

        if( scoredPlayerDetail.playerID != allPlayers[thisPlayer].id ){

            var message = {
                eventName : 'OTHER_PLAYER_SCORED' ,
                playerDetails : JSON.stringify( scoredPlayerDetail )
            };

            console.log(message);
            allPlayers[thisPlayer].connection.send(JSON.stringify(message));
            console.log('done   ' );
        }

    };

    console.log('test');
    Object.getOwnPropertyNames( allPlayers ).forEach( broadcastExceptSourcePlayer );
};

global.Game = new Game();
