/**
 * A component to manipulate world gravity for Matter.js bodies.
 *
 * @namespace Phaser.Physics.Matter.Components.Gravity
 * 
 */
var Gravity = {

    /**
     * A togglable function for ignoring world gravity in real-time on the current body.
     *
     * @method Phaser.Physics.Matter.Components.Gravity#setIgnoreGravity
     * 
     *
     * @param {boolean} value - Set to true to ignore the effect of world gravity, or false to not ignore it.
     *
     * @return {this} This Game Object instance.
     */
    setIgnoreGravity: function (value) {
        this.body.ignoreGravity = value;

        return this;
    }

};

module.exports = Gravity;
