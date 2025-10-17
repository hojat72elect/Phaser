/**
 * Methods for setting the friction of an Arcade Physics Body.
 *
 * In Arcade Physics, friction is a special case of motion transfer from an "immovable" body to a riding body.
 *
 * @namespace Phaser.Physics.Arcade.Components.Friction
 * 
 *
 * @see Phaser.Physics.Arcade.Body#friction
 */
var Friction = {

    /**
     * Sets the friction of this game object's physics body.
     * In Arcade Physics, friction is a special case of motion transfer from an "immovable" body to a riding body.
     *
     * @method Phaser.Physics.Arcade.Components.Friction#setFriction
     * 
     *
     * @param {number} x - The amount of horizontal friction to apply, [0, 1].
     * @param {number} [y=x] - The amount of vertical friction to apply, [0, 1].
     *
     * @return {this} This Game Object.
     *
     * @see Phaser.Physics.Arcade.Body#friction
     */
    setFriction: function (x, y) {
        this.body.friction.set(x, y);

        return this;
    },

    /**
     * Sets the horizontal friction of this game object's physics body.
     * This can move a riding body horizontally when it collides with this one on the vertical axis.
     *
     * @method Phaser.Physics.Arcade.Components.Friction#setFrictionX
     * 
     *
     * @param {number} x - The amount of friction to apply, [0, 1].
     *
     * @return {this} This Game Object.
     *
     * @see Phaser.Physics.Arcade.Body#friction
     */
    setFrictionX: function (x) {
        this.body.friction.x = x;

        return this;
    },

    /**
     * Sets the vertical friction of this game object's physics body.
     * This can move a riding body vertically when it collides with this one on the horizontal axis.
     *
     * @method Phaser.Physics.Arcade.Components.Friction#setFrictionY
     * 
     *
     * @param {number} y - The amount of friction to apply, [0, 1].
     *
     * @return {this} This Game Object.
     *
     * @see Phaser.Physics.Arcade.Body#friction
     */
    setFrictionY: function (y) {
        this.body.friction.y = y;

        return this;
    }

};

module.exports = Friction;
