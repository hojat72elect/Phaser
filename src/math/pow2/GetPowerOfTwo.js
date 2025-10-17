/**
 * Returns the nearest power of 2 to the given `value`.
 *
 * @function Phaser.Math.Pow2.GetNext
 * 
 *
 * @param {number} value - The value.
 *
 * @return {number} The nearest power of 2 to `value`.
 */
var GetPowerOfTwo = function (value) {
    var index = Math.log(value) / 0.6931471805599453;

    return (1 << Math.ceil(index));
};

module.exports = GetPowerOfTwo;
