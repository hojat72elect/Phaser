

/**
 * Calculate the squared distance between two points.
 *
 * @function Phaser.Math.Distance.BetweenPointsSquared
 * 
 *
 * @param {Phaser.Types.Math.Vector2Like} a - The first point.
 * @param {Phaser.Types.Math.Vector2Like} b - The second point.
 *
 * @return {number} The squared distance between the points.
 */
var DistanceBetweenPointsSquared = function (a, b) {
    var dx = a.x - b.x;
    var dy = a.y - b.y;

    return dx * dx + dy * dy;
};

module.exports = DistanceBetweenPointsSquared;
