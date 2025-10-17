/**
 * Cubic ease-out.
 *
 * @function Phaser.Math.Easing.Cubic.Out
 * 
 *
 * @param {number} v - The value to be tweened.
 *
 * @return {number} The tweened value.
 */
var Out = function (v) {
    return --v * v * v + 1;
};

module.exports = Out;
