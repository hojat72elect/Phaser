/**
 * Calculate the height of the given line.
 *
 * @function Phaser.Geom.Line.Height
 * 
 *
 * @param {Phaser.Geom.Line} line - The line to calculate the height of.
 *
 * @return {number} The height of the line.
 */
var Height = function (line) {
    return Math.abs(line.y1 - line.y2);
};

module.exports = Height;
