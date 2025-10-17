/**
 * Calculate the fuzzy ceiling of the given value.
 *
 * @function Phaser.Math.Fuzzy.Ceil
 * 
 *
 * @param {number} value - The value.
 * @param {number} [epsilon=0.0001] - The epsilon.
 *
 * @return {number} The fuzzy ceiling of the value.
 */
var Ceil = function (value, epsilon) {
    if (epsilon === undefined) {
        epsilon = 0.0001;
    }

    return Math.ceil(value - epsilon);
};

module.exports = Ceil;
