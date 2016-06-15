/**
 * Created by imvetri on 5/7/16.
 * This file is a dependency file. Should get executed along with other dependency files before other files get executed
 */

window.Player = (function() {

    var playerTemplate =  document.querySelector('#playerTemplate').querySelector('.player'),
        header = document.querySelector('#playArena');

    //pass game status only to thisplayer.
    var Player = function( playerName , playerID , playerScore ){
        this.name = playerName ;
        this.id = playerID ;
        this.score = Number ( playerScore );

        this.createPlayerDOM();
        this.bindEvents();
    };
    Player.prototype.createPlayerDOM = function() {
        this.playerDOM = playerTemplate.cloneNode(true);
        header.appendChild ( this.playerDOM );
    };
    Player.prototype.bindEvents = function() {
        /*
            player listens to -
                JOIN_REQUEST
                DAMAGE

            player emits -
                JOIN_REQUEST
                DAMAGE

         */

        /*
            decrease opponent score if player clicks on it
            send join request to opponent if player holds opponent
            pulse opponent with white color if opponent sends join request
            shoot player away if opponent rejects join request

            pulse player
         */
    };

    Player.prototype.increaseScore = function () {
        this.score = 1 + this.score ;
    };
    return Player;
})();
