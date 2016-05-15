/**
 * Created by imvetri on 5/15/16.
 */

var handleControlOnMessageEvent = function( message ){
    var messageObj = JSON.parse( message),
        eventName = messageObj.eventName;

    switch( eventName ){
        case 'NEW_PLAYER_CREATED':
            console.log('NEW_PLAYER_CREATED');
            break;
        case 'PLAYER_SCORED_UP':
            console.log('PLAYER_SCORED_UP');
            break;
    }
};

module.exports.handleControlOnMessageEvent = handleControlOnMessageEvent;