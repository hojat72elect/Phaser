/**
 * Circular ease-out.
 *
 * @function Phaser.Math.Easing.Circular.Out
 * 
 *
 * @param {number} v - The value to be tweened.
 *
 * @return {number} The tweened value.
 */
var Out = function (v) {
    return Math.sqrt(1 - (--v * v));
};

module.exports = Out;
