/**
 * Created by imvetri on 5/3/16.
 */


var ipaddress = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
var port      = process.env.OPENSHIFT_NODEJS_PORT || 8080;


module.exports.ipaddress = ipaddress;
module.exports.port = port;
