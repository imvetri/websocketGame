/**
 * Created by imvetri on 5/3/16.
 */


var _ipaddress = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
var _port      = process.env.OPENSHIFT_NODEJS_PORT || 8080;

module.exports.ipaddress = _ipaddress;
module.exports.port = _port;