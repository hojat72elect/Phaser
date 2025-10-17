/**
 * A NULL OP callback function.
 *
 * This function always returns `null`.
 *
 * Used internally by Phaser when it's more expensive to determine if a callback exists
 * than it is to just invoke an empty function.
 *
 * @function Phaser.Utils.NULL
 * 
 */
var NULL = function () {
    return null;
};

module.exports = NULL;
