/**
 * Linear easing (no variation).
 *
 * @function Phaser.Math.Easing.Linear
 * @since 3.0.0
 *
 * @param {number} v - The value to be tweened.
 *
 * @return {number} The tweened value.
 */
var Linear = function (v) {
    return v;
};

module.exports = Linear;
