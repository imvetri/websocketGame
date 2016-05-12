(function(){
	"use strict";

	//if old game then create new player using saved player data
	var playerName , playerScore;

	if(localStorage.getItem('oldGame') == true ){
		 playerName = localStorage.getItem('playerName');
		 playerScore = localStorage.getItem('playerScore');
	 }
	else {
		 playerName = window.prompt();
		 playerScore = 0;

		 localStorage.setItem( 'playerName', playerName );
		 localStorage.setItem( 'playerScore', playerScore );
	}

	var mainPlayer = new Player( playerName , playerScore);

  var game = new Game();
	game.start();
})();
