/**
 * Exponential ease-out.
 *
 * @function Phaser.Math.Easing.Expo.Out
 * 
 *
 * @param {number} v - The value to be tweened.
 *
 * @return {number} The tweened value.
 */
var Out = function (v) {
    return 1 - Math.pow(2, -10 * v);
};

module.exports = Out;
