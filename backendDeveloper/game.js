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
    var message;
    console.log('this.players');
    var test = this.players;
    console.log('test');
    
};

global.Game = new Game();
