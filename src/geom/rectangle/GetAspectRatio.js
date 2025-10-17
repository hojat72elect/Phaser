/**
 * Calculates the width/height ratio of a rectangle.
 *
 * @function Phaser.Geom.Rectangle.GetAspectRatio
 * 
 *
 * @param {Phaser.Geom.Rectangle} rect - The rectangle.
 *
 * @return {number} The width/height ratio of the rectangle.
 */
var GetAspectRatio = function (rect) {
    return (rect.height === 0) ? NaN : rect.width / rect.height;
};

module.exports = GetAspectRatio;
