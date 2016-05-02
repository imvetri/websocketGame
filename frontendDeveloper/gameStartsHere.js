(function(){
	"use strict";
	//this is bad. each time you access properity DOM will be accessed
	var DOM = {
		playerRank : document.getElementById('playerRank'),
		playerJoystick : document.getElementById('playerJoystick')
	};

	var player = {
		score : 0,
		init : function(){
			DOM.playerJoystick.addEventListener('click' , player.increaseScore);
		},
		initScore : function(){
			//if player already exists, update the score
			// else do nothing
		},
		increaseScore : function(){
		//if game connection succeded, send currentScore+1
		}
	};

	var connection = {
		init : function(){
			//initiate websockt connection here
		},
		sendScore : function(){

		},
		close : function(){
			//before window close, bind this function
		},
		onError : function(){
			//on connection failure try reconnect
			//on connection failure keep listening to score. this will provide offline scoring as well
			//on reconnection update the score
		},
		reconnect : function(){

		}
	};

	window.addEventListener("load" , player.init);
	window.addEventListener("load" , connection.init)
})()
