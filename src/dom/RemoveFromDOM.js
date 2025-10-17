/**
 * Attempts to remove the element from its parentNode in the DOM.
 *
 * @function Phaser.DOM.RemoveFromDOM
 * 
 *
 * @param {HTMLElement} element - The DOM element to remove from its parent node.
 */
var RemoveFromDOM = function (element) {
    if (element.parentNode) {
        element.parentNode.removeChild(element);
    }
};

module.exports = RemoveFromDOM;
