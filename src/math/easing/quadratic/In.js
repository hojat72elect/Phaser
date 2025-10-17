/**
 * Quadratic ease-in.
 *
 * @function Phaser.Math.Easing.Quadratic.In
 * 
 *
 * @param {number} v - The value to be tweened.
 *
 * @return {number} The tweened value.
 */
var In = function (v) {
    return v * v;
};

module.exports = In;
