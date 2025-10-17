/**
 * Check whether the given values are fuzzily equal.
 *
 * Two numbers are fuzzily equal if their difference is less than `epsilon`.
 *
 * @function Phaser.Math.Fuzzy.Equal
 * 
 *
 * @param {number} a - The first value.
 * @param {number} b - The second value.
 * @param {number} [epsilon=0.0001] - The epsilon.
 *
 * @return {boolean} `true` if the values are fuzzily equal, otherwise `false`.
 */
var Equal = function (a, b, epsilon) {
    if (epsilon === undefined) {
        epsilon = 0.0001;
    }

    return Math.abs(a - b) < epsilon;
};

module.exports = Equal;
