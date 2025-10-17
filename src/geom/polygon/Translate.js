/**
 * Tranlates the points of the given Polygon.
 *
 * @function Phaser.Geom.Polygon.Translate
 * 
 *
 * @generic {Phaser.Geom.Polygon} O - [polygon,$return]
 *
 * @param {Phaser.Geom.Polygon} polygon - The Polygon to modify.
 * @param {number} x - The amount to horizontally translate the points by.
 * @param {number} y - The amount to vertically translate the points by.
 *
 * @return {Phaser.Geom.Polygon} The modified Polygon.
 */
var Translate = function (polygon, x, y) {
    var points = polygon.points;

    for (var i = 0; i < points.length; i++) {
        points[i].x += x;
        points[i].y += y;
    }

    return polygon;
};

module.exports = Translate;
