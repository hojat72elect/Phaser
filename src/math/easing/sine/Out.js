/**
 * Sinusoidal ease-out.
 *
 * @function Phaser.Math.Easing.Sine.Out
 * 
 *
 * @param {number} v - The value to be tweened.
 *
 * @return {number} The tweened value.
 */
var Out = function (v) {
    if (v === 0) {
        return 0;
    } else if (v === 1) {
        return 1;
    } else {
        return Math.sin(v * Math.PI / 2);
    }
};

module.exports = Out;
