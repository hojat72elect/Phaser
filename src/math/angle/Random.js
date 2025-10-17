

var FloatBetween = require('../FloatBetween');

/**
 * Returns a random angle in the range [-pi, pi].
 *
 * @function Phaser.Math.Angle.Random
 * 
 *
 * @return {number} The angle, in radians.
 */
var Random = function () {
    return FloatBetween(-Math.PI, Math.PI);
};

module.exports = Random;
