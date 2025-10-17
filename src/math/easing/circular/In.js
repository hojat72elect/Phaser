/**
 * Circular ease-in.
 *
 * @function Phaser.Math.Easing.Circular.In
 * 
 *
 * @param {number} v - The value to be tweened.
 *
 * @return {number} The tweened value.
 */
var In = function (v) {
    return 1 - Math.sqrt(1 - v * v);
};

module.exports = In;
