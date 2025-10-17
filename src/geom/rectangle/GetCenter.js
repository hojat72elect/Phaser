var Point = require('../point/Point');

/**
 * Returns the center of a Rectangle as a Point.
 *
 * @function Phaser.Geom.Rectangle.GetCenter
 * 
 *
 * @generic {Phaser.Geom.Point} O - [out,$return]
 *
 * @param {Phaser.Geom.Rectangle} rect - The Rectangle to get the center of.
 * @param {(Phaser.Geom.Point|object)} [out] - Optional point-like object to update with the center coordinates.
 *
 * @return {(Phaser.Geom.Point|object)} The modified `out` object, or a new Point if none was provided.
 */
var GetCenter = function (rect, out) {
    if (out === undefined) {
        out = new Point();
    }

    out.x = rect.centerX;
    out.y = rect.centerY;

    return out;
};

module.exports = GetCenter;
