var Point = require('./Point');

/**
 * Clone the given Point.
 *
 * @function Phaser.Geom.Point.Clone
 * 
 *
 * @param {Phaser.Geom.Point} source - The source Point to clone.
 *
 * @return {Phaser.Geom.Point} The cloned Point.
 */
var Clone = function (source) {
    return new Point(source.x, source.y);
};

module.exports = Clone;
