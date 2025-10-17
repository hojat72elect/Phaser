/**
 * Cubic ease-in.
 *
 * @function Phaser.Math.Easing.Cubic.In
 * 
 *
 * @param {number} v - The value to be tweened.
 *
 * @return {number} The tweened value.
 */
var In = function (v) {
    return v * v * v;
};

module.exports = In;
