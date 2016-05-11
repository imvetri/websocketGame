(function(){
	"use strict";
	//this is bad. each time you access properity DOM will be accessed
	var DOM = {
		playerRank : document.getElementById('playerRank'),
		playerJoystick : document.getElementById('playerJoystick')
	};


	var connectionManager = window.connectionManager,
			player = window.player;

})();
