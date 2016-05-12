
/**
 * Created by imvetri on 5/7/16.
 * This file is a dependency file. Should get executed along with other dependency files before other files get executed
 */

 var Game = function(){
 };

 Game.prototype.STATES = [ 'NEW', 'STARTED' , 'PAUSED' ];
 Game.prototype.STATE  =  '';
 Game.prototype.setState = function( state ){
   this.STATE = state;
 };
 Game.prototype.getState = function(){
   return this.STATE;
 };
 Game.prototype.start = function(){
   this.STATE = 'STARTED'
 };
 Game.prototype.pause = function(){
   this.STATE = 'PAUSED'
 };
 Game.prototype.resume = function(){
   this.STATE = 'STARTED'
 };
 Game.prototype.end = function(){
 };
