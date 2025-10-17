var Class = require('../utils/Class');

/**
 * @classdesc
 * FX Controller is the base class that all built-in FX use.
 *
 * You should not normally create an instance of this class directly, but instead use one of the built-in FX that extend it.
 *
 * @class Controller
 * @memberof Phaser.FX
 * @constructor
 * 
 *
 * @param {number} type - The FX Type constant.
 * @param {Phaser.GameObjects.GameObject} gameObject - A reference to the Game Object that has this fx.
 */
var Controller = new Class({

    initialize:

        function Controller(type, gameObject) {
            /**
             * The FX_CONST type of this effect.
             *
             * @name Phaser.FX.Controller#type
             * @type {number}
             * 
             */
            this.type = type;

            /**
             * A reference to the Game Object that owns this effect.
             *
             * @name Phaser.FX.Controller#gameObject
             * @type {Phaser.GameObjects.GameObject}
             * 
             */
            this.gameObject = gameObject;

            /**
             * Toggle this boolean to enable or disable this effect,
             * without removing and adding it from the Game Object.
             *
             * Only works for Pre FX.
             *
             * Post FX are always active.
             *
             * @name Phaser.FX.Controller#active
             * @type {boolean}
             * 
             */
            this.active = true;
        },

    /**
     * Sets the active state of this FX Controller.
     *
     * A disabled FX Controller will not be updated.
     *
     * @method Phaser.FX.Controller#setActive
     * 
     *
     * @param {boolean} value - `true` to enable this FX Controller, or `false` to disable it.
     *
     * @return {this} This FX Controller instance.
     */
    setActive: function (value) {
        this.active = value;

        return this;
    },

    /**
     * Destroys this FX Controller.
     *
     * @method Phaser.FX.Controller#destroy
     * 
     */
    destroy: function () {
        this.gameObject = null;
        this.active = false;
    }

});

module.exports = Controller;
