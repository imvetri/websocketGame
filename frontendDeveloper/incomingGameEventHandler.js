/**
 * Created by imvetri on 5/15/16.
 */

var judgeEvent = (function(){
    
    return function( message ){
        var messageObj = JSON.parse( message),
            eventName = messageObj.eventName,
            playerDetails = messageObj.playerDetails;

        switch( eventName ){
            case 'NEW_PLAYER_CREATED':
                break;
            case 'PLAYER_DELETED':
                break;
            case 'PLAYER_ONLINE':
                console.log('PLAYER_ONLINE');
                break;
            case 'PLAYER_SCORED_UP':
                console.log('PLAYER_SCORED_UP');
                break;
        }
    };
})();

window.judgeEvent = judgeEvent;