/**
 * Provides methods used for setting the acceleration properties of an Arcade Physics Body.
 *
 * @namespace Phaser.Physics.Arcade.Components.Acceleration
 * 
 */
var Acceleration = {

    /**
     * Sets the body's horizontal and vertical acceleration. If the vertical acceleration value is not provided, the vertical acceleration is set to the same value as the horizontal acceleration.
     *
     * @method Phaser.Physics.Arcade.Components.Acceleration#setAcceleration
     * 
     *
     * @param {number} x - The horizontal acceleration
     * @param {number} [y=x] - The vertical acceleration
     *
     * @return {this} This Game Object.
     */
    setAcceleration: function (x, y) {
        this.body.acceleration.set(x, y);

        return this;
    },

    /**
     * Sets the body's horizontal acceleration.
     *
     * @method Phaser.Physics.Arcade.Components.Acceleration#setAccelerationX
     * 
     *
     * @param {number} value - The horizontal acceleration
     *
     * @return {this} This Game Object.
     */
    setAccelerationX: function (value) {
        this.body.acceleration.x = value;

        return this;
    },

    /**
     * Sets the body's vertical acceleration.
     *
     * @method Phaser.Physics.Arcade.Components.Acceleration#setAccelerationY
     * 
     *
     * @param {number} value - The vertical acceleration
     *
     * @return {this} This Game Object.
     */
    setAccelerationY: function (value) {
        this.body.acceleration.y = value;

        return this;
    }

};

module.exports = Acceleration;
