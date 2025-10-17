var CONST = require('./const');

/**
 * Convert the given angle from degrees, to the equivalent angle in radians.
 *
 * @function Phaser.Math.DegToRad
 * 
 *
 * @param {number} degrees - The angle (in degrees) to convert to radians.
 *
 * @return {number} The given angle converted to radians.
 */
var DegToRad = function (degrees) {
    return degrees * CONST.DEG_TO_RAD;
};

module.exports = DegToRad;
