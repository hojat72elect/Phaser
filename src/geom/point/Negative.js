var Point = require('./Point');

/**
 * Inverts a Point's coordinates.
 *
 * @function Phaser.Geom.Point.Negative
 * 
 *
 * @generic {Phaser.Geom.Point} O - [out,$return]
 *
 * @param {Phaser.Geom.Point} point - The Point to invert.
 * @param {Phaser.Geom.Point} [out] - The Point to return the inverted coordinates in.
 *
 * @return {Phaser.Geom.Point} The modified `out` Point, or a new Point if none was provided.
 */
var Negative = function (point, out) {
    if (out === undefined) {
        out = new Point();
    }

    return out.setTo(-point.x, -point.y);
};

module.exports = Negative;
