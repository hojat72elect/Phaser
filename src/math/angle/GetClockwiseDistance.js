

var NormalizeAngle = require('./Normalize');

/**
 * Gets the shortest nonnegative angular distance from angle1 to angle2.
 *
 * @function Phaser.Math.Angle.GetClockwiseDistance
 *
 * @param {number} angle1 - The starting angle in radians.
 * @param {number} angle2 - The target angle in radians.
 *
 * @return {number} The distance in radians, in the range [0, 2pi).
 */
var GetClockwiseDistance = function (angle1, angle2) {
    return NormalizeAngle(angle2 - angle1);
};

module.exports = GetClockwiseDistance;
