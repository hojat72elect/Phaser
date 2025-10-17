/**
 * Calculates the positive difference of two given numbers.
 *
 * @function Phaser.Math.Difference
 * 
 *
 * @param {number} a - The first number in the calculation.
 * @param {number} b - The second number in the calculation.
 *
 * @return {number} The positive difference of the two given numbers.
 */
var Difference = function (a, b) {
    return Math.abs(a - b);
};

module.exports = Difference;
