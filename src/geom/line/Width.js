/**
 * Calculate the width of the given line.
 *
 * @function Phaser.Geom.Line.Width
 * 
 *
 * @param {Phaser.Geom.Line} line - The line to calculate the width of.
 *
 * @return {number} The width of the line.
 */
var Width = function (line) {
    return Math.abs(line.x1 - line.x2);
};

module.exports = Width;
