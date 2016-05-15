
/**
 * Created by imvetri on 5/7/16.
 * This file is a dependency file. Should get executed along with other dependency files before other files get executed
 */

 var Game = function(){
 };

 Game.prototype.otherPlayers = {};
 Game.prototype.player = {};
 Game.prototype.gameStatus = {
    ACTIVE : false,
    playerName : '',
    playerScore : 0,
    playerID : 0
 };

 //create new player if doesnt exist
 Game.prototype.init = function(){

     this.readGameFromStorage();
     if( !this.gameStatus.ACTIVE )
        this.promptPlayerName();
     // todo : find alternative way to call a function whenever a object gets updted
     this.saveGame2Storage();
     this.player = new Player(  this.gameStatus.playerName , this.gameStatus.playerID ,this.gameStatus.playerScore  );

 };

//increase player score on doc click
 Game.prototype.startBindingEvents = function(){
    //player will be able to score
    document.addEventListener('click' , this.increaseScore.bind(this) );
    connection.onmessage = this.messageReceived.bind( this )
};
 Game.prototype.promptPlayerName = function(){
     //update gameStatus with new values
     this.gameStatus.playerName = window.prompt();
     this.gameStatus.ACTIVE = true;
     this.gameStatus.playerID = Math.ceil ( Math.random()*10000); //generate random ID
     this.saveGame2Remote( 'NEW_PLAYER_CREATED' );

 };
//read game status form local storage
 Game.prototype.readGameFromStorage = function(){

    for ( var prop in this.gameStatus ){
        //this technique doesnt override gamestatus original value if localstorage is empty
        this.gameStatus[prop] = localStorage.getItem( prop ) || this.gameStatus[prop];
    }
};
//write game status to local storage
 Game.prototype.saveGame2Storage = function(){

     for ( var prop in this.gameStatus ){
        localStorage.setItem( prop , this.gameStatus[prop] );
     }
 };
//send server the current player's score
 Game.prototype.saveGame2Remote = function( eventName ) {
     var payload = {
         eventName : eventName ,
         gameStatus : this.gameStatus
     };
     connection.send( JSON.stringify( payload ) );
 };
// message came from server
 Game.prototype.messageReceived = function( message ){
     var messageObj = JSON.parse( message );
     if ( messageObj.eventName == "OTHER_PLAYERS_NEW_SCORE" ) {
         console.log('other Players score received');
     }

 };
 Game.prototype.increaseScore = function(){
     this.player.increaseScore();
     this.gameStatus.playerScore = this.player.score ;
     this.saveGame2Storage();
     this.saveGame2Remote( 'PLAYER_SCORED_UP' );
 };