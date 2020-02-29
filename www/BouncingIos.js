var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'BouncingIos', 'coolMethod', [arg0]);
};
module.exports.didMoveToWindow = function (arg0, success, error) {
    exec(success, error, 'BouncingIos', 'didMoveToWindow', [arg0]);
};
