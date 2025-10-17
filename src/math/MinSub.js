/**
 * Subtract an `amount` from `value`, limiting the minimum result to `min`.
 *
 * @function Phaser.Math.MinSub
 * 
 *
 * @param {number} value - The value to subtract from.
 * @param {number} amount - The amount to subtract.
 * @param {number} min - The minimum value to return.
 *
 * @return {number} The resulting value.
 */
var MinSub = function (value, amount, min) {
    return Math.max(value - amount, min);
};

module.exports = MinSub;
