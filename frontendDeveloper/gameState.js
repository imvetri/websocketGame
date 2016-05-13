
/**
 * Created by imvetri on 5/7/16.
 * This file is a dependency file. Should get executed along with other dependency files before other files get executed
 */

 var Game = function(){
 };
 Game.prototype.otherPlayers = {};
 Game.prototype.thisPlayer = {};

 Game.prototype.STATES = [ 'NEW', 'STARTED' , 'PAUSED' ];
 Game.prototype.STATE  =  '';
 Game.prototype.setState = function( state ){
   this.STATE = state;
 };
 Game.prototype.getState = function(){
   return this.STATE;
 };
 //if old game then create new player using saved player data
 Game.prototype.init = function(){
   this.STATE = 'STARTED';

       if(localStorage.getItem('oldGame')){
          playerName = localStorage.getItem('playerName');
          playerScore = localStorage.getItem('playerScore');
        }
       else {
          playerName = window.prompt();
          playerScore = 0;

          localStorage.setItem( 'oldGame', true );
          localStorage.setItem( 'playerName', playerName );
          localStorage.setItem( 'playerScore', playerScore );
       }
       this.thisPlayer = new Player( playerName , playerScore );
 };

 Game.prototype.start = function(){
   //player will be able to score
   document.addEventListener('click' , function(){} );
 };
 Game.prototype.pause = function(){
   this.STATE = 'PAUSED'
 };
 Game.prototype.resume = function(){
   this.STATE = 'STARTED'
 };
 Game.prototype.end = function(){
 };
