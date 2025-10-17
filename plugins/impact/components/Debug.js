/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Impact Debug component.
 * Should be applied as a mixin.
 *
 * @namespace Phaser.Physics.Impact.Components.Debug
 * 
 */
var Debug = {

    /**
     * [description]
     *
     * @method Phaser.Physics.Impact.Components.Debug#setDebug
     * 
     *
     * @param {boolean} showBody - [description]
     * @param {boolean} showVelocity - [description]
     * @param {number} bodyColor - [description]
     *
     * @return {Phaser.GameObjects.GameObject} This Game Object.
     */
    setDebug: function (showBody, showVelocity, bodyColor) {
        this.debugShowBody = showBody;
        this.debugShowVelocity = showVelocity;
        this.debugBodyColor = bodyColor;

        return this;
    },

    /**
     * [description]
     *
     * @method Phaser.Physics.Impact.Components.Debug#setDebugBodyColor
     * 
     *
     * @param {number} value - [description]
     *
     * @return {Phaser.GameObjects.GameObject} This Game Object.
     */
    setDebugBodyColor: function (value) {
        this.body.debugBodyColor = value;

        return this;
    },

    /**
     * [description]
     *
     * @name Phaser.Physics.Impact.Components.Debug#debugShowBody
     * @type {boolean}
     * 
     */
    debugShowBody: {

        get: function () {
            return this.body.debugShowBody;
        },

        set: function (value) {
            this.body.debugShowBody = value;
        }

    },

    /**
     * [description]
     *
     * @name Phaser.Physics.Impact.Components.Debug#debugShowVelocity
     * @type {boolean}
     * 
     */
    debugShowVelocity: {

        get: function () {
            return this.body.debugShowVelocity;
        },

        set: function (value) {
            this.body.debugShowVelocity = value;
        }

    },

    /**
     * [description]
     *
     * @name Phaser.Physics.Impact.Components.Debug#debugBodyColor
     * @type {number}
     * 
     */
    debugBodyColor: {

        get: function () {
            return this.body.debugBodyColor;
        },

        set: function (value) {
            this.body.debugBodyColor = value;
        }

    }

};

module.exports = Debug;
