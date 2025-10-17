var Class = require('../../../../utils/Class');
var VignetteFrag = require('../../shaders/FXVignette-frag');
var PostFXPipeline = require('../PostFXPipeline');

/**
 * @classdesc
 * The Vignette FX Pipeline.
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
 * sprite.postFX.addVignette();
 * ```
 *
 * @class VignetteFXPipeline
 * @extends Phaser.Renderer.WebGL.Pipelines.PostFXPipeline
 * @memberof Phaser.Renderer.WebGL.Pipelines.FX
 * @constructor
 * 
 *
 * @param {Phaser.Game} game - A reference to the Phaser Game instance.
 */
var VignetteFXPipeline = new Class({

    Extends: PostFXPipeline,

    initialize:

        function VignetteFXPipeline(game) {
            PostFXPipeline.call(this, {
                game: game,
                fragShader: VignetteFrag
            });

            /**
             * The horizontal offset of the vignette effect. This value is normalized to the range 0 to 1.
             *
             * @name Phaser.Renderer.WebGL.Pipelines.FX.VignetteFXPipeline#x
             * @type {number}
             * 
             */
            this.x = 0.5;

            /**
             * The vertical offset of the vignette effect. This value is normalized to the range 0 to 1.
             *
             * @name Phaser.Renderer.WebGL.Pipelines.FX.VignetteFXPipeline#y
             * @type {number}
             * 
             */
            this.y = 0.5;

            /**
             * The radius of the vignette effect. This value is normalized to the range 0 to 1.
             *
             * @name Phaser.Renderer.WebGL.Pipelines.FX.VignetteFXPipeline#radius
             * @type {number}
             * 
             */
            this.radius = 0.5;

            /**
             * The strength of the vignette effect.
             *
             * @name Phaser.Renderer.WebGL.Pipelines.FX.VignetteFXPipeline#strength
             * @type {number}
             * 
             */
            this.strength = 0.5;
        },

    onPreRender: function (controller, shader) {
        controller = this.getController(controller);

        this.set1f('radius', controller.radius, shader);
        this.set1f('strength', controller.strength, shader);
        this.set2f('position', controller.x, controller.y, shader);
    }

});

module.exports = VignetteFXPipeline;
