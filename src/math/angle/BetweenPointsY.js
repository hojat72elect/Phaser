/**
 * Find the angle of a segment from (point1.x, point1.y) -> (point2.x, point2.y).
 *
 * The difference between this method and {@link Phaser.Math.Angle.BetweenPoints} is that this assumes the y coordinate
 * travels down the screen.
 *
 * @function Phaser.Math.Angle.BetweenPointsY
 * 
 *
 * @param {Phaser.Types.Math.Vector2Like} point1 - The first point.
 * @param {Phaser.Types.Math.Vector2Like} point2 - The second point.
 *
 * @return {number} The angle in radians.
 */
var BetweenPointsY = function (point1, point2) {
    return Math.atan2(point2.x - point1.x, point2.y - point1.y);
};

module.exports = BetweenPointsY;
