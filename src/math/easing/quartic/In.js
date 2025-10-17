/**
 * Quartic ease-in.
 *
 * @function Phaser.Math.Easing.Quartic.In
 * @since 3.0.0
 *
 * @param {number} v - The value to be tweened.
 *
 * @return {number} The tweened value.
 */
var In = function (v) {
    return v * v * v * v;
};

module.exports = In;
