/**
 * Provides methods used for setting the angular acceleration properties of an Arcade Physics Body.
 *
 * @namespace Phaser.Physics.Arcade.Components.Angular
 * 
 */
var Angular = {

    /**
     * Sets the angular velocity of the body.
     *
     * In Arcade Physics, bodies cannot rotate. They are always axis-aligned.
     * However, they can have angular motion, which is passed on to the Game Object bound to the body,
     * causing them to visually rotate, even though the body remains axis-aligned.
     *
     * @method Phaser.Physics.Arcade.Components.Angular#setAngularVelocity
     * 
     *
     * @param {number} value - The amount of angular velocity.
     *
     * @return {this} This Game Object.
     */
    setAngularVelocity: function (value) {
        this.body.angularVelocity = value;

        return this;
    },

    /**
     * Sets the angular acceleration of the body.
     *
     * In Arcade Physics, bodies cannot rotate. They are always axis-aligned.
     * However, they can have angular motion, which is passed on to the Game Object bound to the body,
     * causing them to visually rotate, even though the body remains axis-aligned.
     *
     * @method Phaser.Physics.Arcade.Components.Angular#setAngularAcceleration
     * 
     *
     * @param {number} value - The amount of angular acceleration.
     *
     * @return {this} This Game Object.
     */
    setAngularAcceleration: function (value) {
        this.body.angularAcceleration = value;

        return this;
    },

    /**
     * Sets the angular drag of the body. Drag is applied to the current velocity, providing a form of deceleration.
     *
     * @method Phaser.Physics.Arcade.Components.Angular#setAngularDrag
     * 
     *
     * @param {number} value - The amount of drag.
     *
     * @return {this} This Game Object.
     */
    setAngularDrag: function (value) {
        this.body.angularDrag = value;

        return this;
    }

};

module.exports = Angular;
