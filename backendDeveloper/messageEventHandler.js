/**
 * Created by imvetri on 5/15/16.
 */

var handleControlOnMessageEvent = function( message ){
    var messageObj = JSON.parse( message),
        eventName = messageObj.eventName,
        playerDetails = messageObj.playerDetails;

    switch( eventName ){
        case 'NEW_PLAYER_CREATED':
            console.log('NEW_PLAYER_CREATED');
            Game.addPlayer( playerDetails );
            break;
        case 'PLAYER_ONLINE':
            console.log('PLAYER_ONLINE');
            //broadcast new player to other players
            Game.broadcastPlayer();
            break;
        case 'PLAYER_SCORED_UP':
            console.log('PLAYER_SCORED_UP');
            //broadcast player score to other players
            Game.scoreUpPlayer( playerDetails );
            break;
    }
};

module.exports.handleControlOnMessageEvent = handleControlOnMessageEvent;