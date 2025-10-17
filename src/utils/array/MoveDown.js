/**
 * Moves the given array element down one place in the array.
 * The array is modified in-place.
 *
 * @function Phaser.Utils.Array.MoveDown
 * 
 *
 * @param {array} array - The input array.
 * @param {*} item - The element to move down the array.
 *
 * @return {array} The input array.
 */
var MoveDown = function (array, item) {
    var currentIndex = array.indexOf(item);

    if (currentIndex > 0) {
        var item2 = array[currentIndex - 1];

        var index2 = array.indexOf(item2);

        array[currentIndex] = item2;
        array[index2] = item;
    }

    return array;
};

module.exports = MoveDown;
