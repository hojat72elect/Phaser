/**
 * Exponential ease-in.
 *
 * @function Phaser.Math.Easing.Expo.In
 * 
 *
 * @param {number} v - The value to be tweened.
 *
 * @return {number} The tweened value.
 */
var In = function (v) {
    return Math.pow(2, 10 * (v - 1)) - 0.001;
};

module.exports = In;
