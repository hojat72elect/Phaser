/**
 * Shallow Object Clone. Will not clone nested objects.
 *
 * @function Phaser.Utils.Objects.Clone
 * @since 3.0.0
 *
 * @param {object} obj - The object to clone.
 *
 * @return {object} A new object with the same properties as the input object.
 */
var Clone = function (obj) {
    var clone = {};

    for (var key in obj) {
        if (Array.isArray(obj[key])) {
            clone[key] = obj[key].slice(0);
        } else {
            clone[key] = obj[key];
        }
    }

    return clone;
};

module.exports = Clone;
