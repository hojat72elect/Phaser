/**
 * Verifies that an object contains at least one of the requested keys
 *
 * @function Phaser.Utils.Objects.HasAny
 * 
 *
 * @param {object} source - an object on which to check for key existence
 * @param {string[]} keys - an array of keys to search the object for
 *
 * @return {boolean} true if the source object contains at least one of the keys, false otherwise
 */
var HasAny = function (source, keys) {
    for (var i = 0; i < keys.length; i++) {
        if (source.hasOwnProperty(keys[i])) {
            return true;
        }
    }

    return false;
};

module.exports = HasAny;
