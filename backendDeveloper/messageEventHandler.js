/**
 * Created by imvetri on 5/15/16.
 */

var handleControlOnMessageEvent = function( message , playerConnection ){
    var messageObj = JSON.parse( message),
        eventName = messageObj.eventName,
        playerDetails = messageObj.playerDetails;

    switch( eventName ){
        case 'NEW_PLAYER_CREATED':
            console.log('NEW_PLAYER_CREATED');
            break;
        case 'PLAYER_SCORED_UP':
            console.log('PLAYER_SCORED_UP');
            Game.scoreUpPlayer( playerDetails );
            Game.broadcastPlayer();

            break;
        case 'PLAYER_DELETED':
            console.log('PLAYER_DELETED');
            Game.delPlayer( playerDetails );
            break;
        case 'PLAYER_ONLINE':
            console.log('PLAYER_ONLINE');
            playerDetails.connection = playerConnection;
            Game.addPlayer( playerDetails);
            //broadcast new player to other players
            break;
    }
};

module.exports.handleControlOnMessageEvent = handleControlOnMessageEvent;
