/**
 * Check if a given value is an even number using a strict type check.
 *
 * @function Phaser.Math.IsEvenStrict
 * 
 *
 * @param {number} value - The number to perform the check with.
 *
 * @return {boolean} Whether the number is even or not.
 */
var IsEvenStrict = function (value) {
    // Use strict equality === for "is number" test
    return (value === parseFloat(value)) ? !(value % 2) : void 0;
};

module.exports = IsEvenStrict;
