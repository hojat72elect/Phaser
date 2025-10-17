/**
 * Find the angle of a segment from (x1, y1) -> (x2, y2).
 *
 * @function Phaser.Math.Angle.Between
 * 
 *
 * @param {number} x1 - The x coordinate of the first point.
 * @param {number} y1 - The y coordinate of the first point.
 * @param {number} x2 - The x coordinate of the second point.
 * @param {number} y2 - The y coordinate of the second point.
 *
 * @return {number} The angle in radians.
 */
var Between = function (x1, y1, x2, y2) {
    return Math.atan2(y2 - y1, x2 - x1);
};

module.exports = Between;
