/**
 * Verifies that an object contains all requested keys
 *
 * @function Phaser.Utils.Objects.HasAll
 * 
 *
 * @param {object} source - an object on which to check for key existence
 * @param {string[]} keys - an array of keys to ensure the source object contains
 *
 * @return {boolean} true if the source object contains all keys, false otherwise.
 */
var HasAll = function (source, keys) {
    for (var i = 0; i < keys.length; i++) {
        if (!source.hasOwnProperty(keys[i])) {
            return false;
        }
    }

    return true;
};

module.exports = HasAll;
