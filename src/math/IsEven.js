/**
 * Check if a given value is an even number.
 *
 * @function Phaser.Math.IsEven
 * 
 *
 * @param {number} value - The number to perform the check with.
 *
 * @return {boolean} Whether the number is even or not.
 */
var IsEven = function (value) {
    // Use abstract equality == for "is number" test

    // eslint-disable-next-line eqeqeq
    return (value == parseFloat(value)) ? !(value % 2) : void 0;
};

module.exports = IsEven;
