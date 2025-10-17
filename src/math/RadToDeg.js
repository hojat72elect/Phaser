var CONST = require('./const');

/**
 * Convert the given angle in radians, to the equivalent angle in degrees.
 *
 * @function Phaser.Math.RadToDeg
 * 
 *
 * @param {number} radians - The angle in radians to convert ot degrees.
 *
 * @return {number} The given angle converted to degrees.
 */
var RadToDeg = function (radians) {
    return radians * CONST.RAD_TO_DEG;
};

module.exports = RadToDeg;
