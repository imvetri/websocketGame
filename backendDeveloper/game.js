/*
 * Created by imvetri on 5/19/16.
 *
 * Game - global object
 * Game will keep track of only online players
 */

//local dependencies
var Player = require('./player');

var Game = function(){

};

Game.prototype.players = {};

Game.prototype.addPlayer = function( playerDetails ){
    var newPlayer = new Player ( playerDetails );
    this.players[ newPlayer.id ] = newPlayer;
};

Game.prototype.removePlayer = function( playerIP ){

};

Game.prototype.scoreUpPlayer = function( playerDetails ){
    this.players[ playerID.id].playerScore +=  1;
};

Game.prototype.broadcastPlayer = function(){

};

global.Game = new Game();