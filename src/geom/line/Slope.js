/**
 * Calculate the slope of the given line.
 *
 * @function Phaser.Geom.Line.Slope
 * 
 *
 * @param {Phaser.Geom.Line} line - The line to calculate the slope of.
 *
 * @return {number} The slope of the line.
 */
var Slope = function (line) {
    return (line.y2 - line.y1) / (line.x2 - line.x1);
};

module.exports = Slope;
