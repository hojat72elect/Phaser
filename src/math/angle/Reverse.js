var Normalize = require('./Normalize');

/**
 * Reverse the given angle.
 *
 * @function Phaser.Math.Angle.Reverse
 * 
 *
 * @param {number} angle - The angle to reverse, in radians.
 *
 * @return {number} The reversed angle, in radians.
 */
var Reverse = function (angle) {
    return Normalize(angle + Math.PI);
};

module.exports = Reverse;
