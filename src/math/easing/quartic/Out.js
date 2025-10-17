/**
 * Quartic ease-out.
 *
 * @function Phaser.Math.Easing.Quartic.Out
 * 
 *
 * @param {number} v - The value to be tweened.
 *
 * @return {number} The tweened value.
 */
var Out = function (v) {
    return 1 - (--v * v * v * v);
};

module.exports = Out;
