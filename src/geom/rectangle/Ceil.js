/**
 * Rounds a Rectangle's position up to the smallest integer greater than or equal to each current coordinate.
 *
 * @function Phaser.Geom.Rectangle.Ceil
 * 
 *
 * @generic {Phaser.Geom.Rectangle} O - [rect,$return]
 *
 * @param {Phaser.Geom.Rectangle} rect - The Rectangle to adjust.
 *
 * @return {Phaser.Geom.Rectangle} The adjusted Rectangle.
 */
var Ceil = function (rect) {
    rect.x = Math.ceil(rect.x);
    rect.y = Math.ceil(rect.y);

    return rect;
};

module.exports = Ceil;
