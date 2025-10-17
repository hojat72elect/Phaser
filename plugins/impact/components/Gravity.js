/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Impact Gravity component.
 * Should be applied as a mixin.
 *
 * @namespace Phaser.Physics.Impact.Components.Gravity
 * 
 */
var Gravity = {

    /**
     * [description]
     *
     * @method Phaser.Physics.Impact.Components.Gravity#setGravity
     * 
     *
     * @param {number} value - [description]
     *
     * @return {Phaser.GameObjects.GameObject} This Game Object.
     */
    setGravity: function (value) {
        this.body.gravityFactor = value;

        return this;
    },

    /**
     * [description]
     *
     * @name Phaser.Physics.Impact.Components.Gravity#gravity
     * @type {number}
     * 
     */
    gravity: {

        get: function () {
            return this.body.gravityFactor;
        },

        set: function (value) {
            this.body.gravityFactor = value;
        }

    }

};

module.exports = Gravity;
