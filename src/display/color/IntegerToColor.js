var Color = require('./Color');
var IntegerToRGB = require('./IntegerToRGB');

/**
 * Converts the given color value into an instance of a Color object.
 *
 * @function Phaser.Display.Color.IntegerToColor
 * 
 *
 * @param {number} input - The color value to convert into a Color object.
 *
 * @return {Phaser.Display.Color} A Color object.
 */
var IntegerToColor = function (input) {
    var rgb = IntegerToRGB(input);

    return new Color(rgb.r, rgb.g, rgb.b, rgb.a);
};

module.exports = IntegerToColor;
