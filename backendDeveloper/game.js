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

Game.prototype.broadcastPlayer = function(){
    console.log('this.players');
    var players = this.players;
    console.log('test');
    Object.getOwnPropertyNames(players ).forEach( function(e){

      var playerDetail = {
        id:players[e].id,
        name:players[e].name,
        score:players[e].score
      };
      var message = {
          eventName : 'PLAYER_SCORED_UP' ,
          playerDetails : JSON.stringify( playerDetail )
      }
      console.log();



      console.log(message);
      players[e].connection.send(JSON.stringify(message))
      console.log('done   ' );
    });
};

global.Game = new Game();
