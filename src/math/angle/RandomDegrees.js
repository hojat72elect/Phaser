

var FloatBetween = require('../FloatBetween');

/**
 * Returns a random angle in the range [-180, 180].
 *
 * @function Phaser.Math.Angle.RandomDegrees
 * 
 *
 * @return {number} The angle, in degrees.
 */
var RandomDegrees = function () {
    return FloatBetween(-180, 180);
};

module.exports = RandomDegrees;
