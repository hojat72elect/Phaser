/**
 * Moves the given element to the bottom of the array.
 * The array is modified in-place.
 *
 * @function Phaser.Utils.Array.SendToBack
 * 
 *
 * @param {array} array - The array.
 * @param {*} item - The element to move.
 *
 * @return {*} The element that was moved.
 */
var SendToBack = function (array, item) {
    var currentIndex = array.indexOf(item);

    if (currentIndex !== -1 && currentIndex > 0) {
        array.splice(currentIndex, 1);
        array.unshift(item);
    }

    return item;
};

module.exports = SendToBack;
