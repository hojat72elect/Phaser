/**
 * Sinusoidal ease-in.
 *
 * @function Phaser.Math.Easing.Sine.In
 * 
 *
 * @param {number} v - The value to be tweened.
 *
 * @return {number} The tweened value.
 */
var In = function (v) {
    if (v === 0) {
        return 0;
    } else if (v === 1) {
        return 1;
    } else {
        return 1 - Math.cos(v * Math.PI / 2);
    }
};

module.exports = In;
