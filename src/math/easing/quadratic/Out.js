/**
 * Quadratic ease-out.
 *
 * @function Phaser.Math.Easing.Quadratic.Out
 * 
 *
 * @param {number} v - The value to be tweened.
 *
 * @return {number} The tweened value.
 */
var Out = function (v) {
    return v * (2 - v);
};

module.exports = Out;
