/**
 * Copy the values of one line to a destination line.
 *
 * @function Phaser.Geom.Line.CopyFrom
 * 
 *
 * @generic {Phaser.Geom.Line} O - [dest,$return]
 *
 * @param {Phaser.Geom.Line} source - The source line to copy the values from.
 * @param {Phaser.Geom.Line} dest - The destination line to copy the values to.
 *
 * @return {Phaser.Geom.Line} The destination line.
 */
var CopyFrom = function (source, dest) {
    return dest.setTo(source.x1, source.y1, source.x2, source.y2);
};

module.exports = CopyFrom;
