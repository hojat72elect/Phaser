/**
 * Either sets or creates the Arcade Body Collision object.
 *
 * Mostly only used internally.
 *
 * @function Phaser.Physics.Arcade.SetCollisionObject
 * 
 *
 * @param {boolean} noneFlip - Is `none` true or false?
 * @param {Phaser.Types.Physics.Arcade.ArcadeBodyCollision} [data] - The collision data object to populate, or create if not given.
 *
 * @return {Phaser.Types.Physics.Arcade.ArcadeBodyCollision} The collision data.
 */
var SetCollisionObject = function (noneFlip, data) {
    if (data === undefined) {
        data = {};
    }

    data.none = noneFlip;
    data.up = false;
    data.down = false;
    data.left = false;
    data.right = false;

    if (!noneFlip) {
        data.up = true;
        data.down = true;
        data.left = true;
        data.right = true;
    }

    return data;
};

module.exports = SetCollisionObject;
