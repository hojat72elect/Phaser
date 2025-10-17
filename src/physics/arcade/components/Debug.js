/**
 * Provides methods used for setting the debug properties of an Arcade Physics Body.
 *
 * @namespace Phaser.Physics.Arcade.Components.Debug
 * 
 */
var Debug = {

    /**
     * Sets the debug values of this body.
     *
     * Bodies will only draw their debug if debug has been enabled for Arcade Physics as a whole.
     * Note that there is a performance cost in drawing debug displays. It should never be used in production.
     *
     * @method Phaser.Physics.Arcade.Components.Debug#setDebug
     * 
     *
     * @param {boolean} showBody - Set to `true` to have this body render its outline to the debug display.
     * @param {boolean} showVelocity - Set to `true` to have this body render a velocity marker to the debug display.
     * @param {number} bodyColor - The color of the body outline when rendered to the debug display.
     *
     * @return {this} This Game Object.
     */
    setDebug: function (showBody, showVelocity, bodyColor) {
        this.debugShowBody = showBody;
        this.debugShowVelocity = showVelocity;
        this.debugBodyColor = bodyColor;

        return this;
    },

    /**
     * Sets the color of the body outline when it renders to the debug display.
     *
     * @method Phaser.Physics.Arcade.Components.Debug#setDebugBodyColor
     * 
     *
     * @param {number} value - The color of the body outline when rendered to the debug display.
     *
     * @return {this} This Game Object.
     */
    setDebugBodyColor: function (value) {
        this.body.debugBodyColor = value;

        return this;
    },

    /**
     * Set to `true` to have this body render its outline to the debug display.
     *
     * @name Phaser.Physics.Arcade.Components.Debug#debugShowBody
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
     * Set to `true` to have this body render a velocity marker to the debug display.
     *
     * @name Phaser.Physics.Arcade.Components.Debug#debugShowVelocity
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
     * The color of the body outline when it renders to the debug display.
     *
     * @name Phaser.Physics.Arcade.Components.Debug#debugBodyColor
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
