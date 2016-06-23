
/**
 * Created by imvetri on 5/7/16.
 * This file is a dependency file. Should get executed along with other dependency files before other files get executed
 *  // todo : find alternative way to call a function whenever a object gets updted
 */

 var Game = function(){
 };

 Game.prototype.otherPlayers = {};
 Game.prototype.player = {};
 Game.prototype.playerDetails = {
    ACTIVE : false,
    playerName : '',
    playerScore : 0,
    playerID : 0
 };
 //create new player if doesnt exist
 Game.prototype.init = function(){

     this.readGameFromStorage();
     if( !this.playerDetails.ACTIVE )
        this.promptPlayerName();
     this.saveGame2Storage();
     this.player = this.createPlayer( this.playerDetails.playerName , this.playerDetails.playerID ,this.playerDetails.playerScore );
     this.saveGame2Remote( 'PLAYER_ONLINE');

 };

 Game.prototype.createPlayer = function( playerName , playerID ,playerScore ){
     return new Player(  playerName , playerID ,playerScore  );
 };
//increase player score on doc click
 Game.prototype.bindEvents = function(){
    //player will be able to score
    var playArena = document.getElementById('playArena'),
        resetBtn = document.getElementById('resetBtn');

    playArena.addEventListener('click' , this.increaseScore.bind(this) );
    resetBtn.addEventListener('click', this.resetGame.bind(this) );
    connection.onmessage = this.messageReceived.bind( this )
};

 Game.prototype.resetGame = function(){
     this.resetGameFromStorage();
     this.saveGame2Remote( 'PLAYER_DELETED' );
     this.resetPlayerObj();
     this.init();
 };
 Game.prototype.resetGameFromStorage = function(){
     for ( var prop in this.playerDetails ){
        localStorage.setItem( prop , '' );
     }
 };
 Game.prototype.resetPlayerObj = function(){
     for ( var prop in this.playerDetails ){
        this.playerDetails[prop] ='';
     }
 };
 Game.prototype.promptPlayerName = function(){
     //update playerDetails with new values
     this.playerDetails.playerName = window.prompt();
     this.playerDetails.ACTIVE = true;
     this.playerDetails.playerID = Math.ceil ( Math.random()*10000); //generate random ID
     this.saveGame2Remote( 'NEW_PLAYER_CREATED' );

 };
//read game status form local storage
 Game.prototype.readGameFromStorage = function(){

    for ( var prop in this.playerDetails ){
        //this technique doesnt override gamestatus original value if localstorage is empty
        this.playerDetails[prop] = localStorage.getItem( prop ) || this.playerDetails[prop];
    }
};
//write game status to local storage
 Game.prototype.saveGame2Storage = function(){

     for ( var prop in this.playerDetails ){
        localStorage.setItem( prop , this.playerDetails[prop] );
     }
 };
//send server the current player's score
 Game.prototype.saveGame2Remote = function( eventName ) {
     var payload = {
         eventName : eventName ,
         playerDetails : this.playerDetails
     };
     connection.post( JSON.stringify( payload ) );
 };
// message comes from server
 Game.prototype.messageReceived = function( message ){
     var messageObj = JSON.parse( message.data),
         playerDetails = JSON.parse( messageObj.playerDetails );
     console.log(messageObj);

     if ( messageObj.eventName == "OTHER_PLAYER_SCORED" ) {
         if( !this.otherPlayers[playerDetails.playerID ] ){
            var oneAnotherPlayer = this.createPlayer( playerDetails.playerName ,
                                                         playerDetails.playerID ,
                                                         playerDetails.playerScore );
            this.otherPlayers[oneAnotherPlayer.id] = oneAnotherPlayer;
          }
          else{
            this.otherPlayers[playerDetails.playerID ].increaseScore();
          }
         console.log('other Players score received',messageObj.playerDetails+'   score '+ messageObj.playerDetails);
     }

 };
 Game.prototype.increaseScore = function(){
     this.player.increaseScore();
     this.playerDetails.playerScore = this.player.score ;
     this.saveGame2Storage();
     this.saveGame2Remote( 'PLAYER_SCORED_UP' );
 };
