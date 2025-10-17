var Class = require('../utils/Class');
var Controller = require('./Controller');
var FX_CONST = require('./const');

/**
 * @classdesc
 * The Vignette FX Controller.
 *
 * This FX controller manages the vignette effect for a Game Object.
 *
 * The vignette effect is a visual technique where the edges of the screen, or a Game Object, gradually darken or blur,
 * creating a frame-like appearance. This effect is used to draw the player's focus towards the central action or subject,
 * enhance immersion, and provide a cinematic or artistic quality to the game's visuals.
 *
 * A Vignette effect is added to a Game Object via the FX component:
 *
 * ```js
 * const sprite = this.add.sprite();
 *
 * sprite.preFX.addVignette();
 * sprite.postFX.addVignette();
 * ```
 *
 * @class Vignette
 * @extends Phaser.FX.Controller
 * @memberof Phaser.FX
 * @constructor
 * 
 *
 * @param {Phaser.GameObjects.GameObject} gameObject - A reference to the Game Object that has this fx.
 * @param {number} [x=0.5] - The horizontal offset of the vignette effect. This value is normalized to the range 0 to 1.
 * @param {number} [y=0.5] - The vertical offset of the vignette effect. This value is normalized to the range 0 to 1.
 * @param {number} [radius=0.5] - The radius of the vignette effect. This value is normalized to the range 0 to 1.
 * @param {number} [strength=0.5] - The strength of the vignette effect.
 */
var Vignette = new Class({

    Extends: Controller,

    initialize:

        function Vignette(gameObject, x, y, radius, strength) {
            if (x === undefined) {
                x = 0.5;
            }
            if (y === undefined) {
                y = 0.5;
            }
            if (radius === undefined) {
                radius = 0.5;
            }
            if (strength === undefined) {
                strength = 0.5;
            }

            Controller.call(this, FX_CONST.VIGNETTE, gameObject);

            /**
             * The horizontal offset of the vignette effect. This value is normalized to the range 0 to 1.
             *
             * @name Phaser.FX.Vignette#x
             * @type {number}
             * 
             */
            this.x = x;

            /**
             * The vertical offset of the vignette effect. This value is normalized to the range 0 to 1.
             *
             * @name Phaser.FX.Vignette#y
             * @type {number}
             * 
             */
            this.y = y;

            /**
             * The radius of the vignette effect. This value is normalized to the range 0 to 1.
             *
             * @name Phaser.FX.Vignette#radius
             * @type {number}
             * 
             */
            this.radius = radius;

            /**
             * The strength of the vignette effect.
             *
             * @name Phaser.FX.Vignette#strength
             * @type {number}
             * 
             */
            this.strength = strength;
        }

});

module.exports = Vignette;
