/**
 * Calculate the distance between two sets of coordinates (points), squared.
 *
 * @function Phaser.Math.Distance.Squared
 * 
 *
 * @param {number} x1 - The x coordinate of the first point.
 * @param {number} y1 - The y coordinate of the first point.
 * @param {number} x2 - The x coordinate of the second point.
 * @param {number} y2 - The y coordinate of the second point.
 *
 * @return {number} The distance between each point, squared.
 */
var DistanceSquared = function (x1, y1, x2, y2) {
    var dx = x1 - x2;
    var dy = y1 - y2;

    return dx * dx + dy * dy;
};

module.exports = DistanceSquared;
