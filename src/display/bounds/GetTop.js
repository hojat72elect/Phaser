/**
 * Returns the top coordinate from the bounds of the Game Object.
 *
 * @function Phaser.Display.Bounds.GetTop
 * 
 *
 * @param {Phaser.GameObjects.GameObject} gameObject - The Game Object to get the bounds value from.
 *
 * @return {number} The top coordinate of the bounds of the Game Object.
 */
var GetTop = function (gameObject) {
    return gameObject.y - (gameObject.height * gameObject.originY);
};

module.exports = GetTop;
