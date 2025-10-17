/**
 * Add an `amount` to a `value`, limiting the maximum result to `max`.
 *
 * @function Phaser.Math.MaxAdd
 * 
 *
 * @param {number} value - The value to add to.
 * @param {number} amount - The amount to add.
 * @param {number} max - The maximum value to return.
 *
 * @return {number} The resulting value.
 */
var MaxAdd = function (value, amount, max) {
    return Math.min(value + amount, max);
};

module.exports = MaxAdd;
