/**
 * Calculates the factorial of a given number for integer values greater than 0.
 *
 * @function Phaser.Math.Factorial
 * 
 *
 * @param {number} value - A positive integer to calculate the factorial of.
 *
 * @return {number} The factorial of the given number.
 */
var Factorial = function (value) {
    if (value === 0) {
        return 1;
    }

    var res = value;

    while (--value) {
        res *= value;
    }

    return res;
};

module.exports = Factorial;
