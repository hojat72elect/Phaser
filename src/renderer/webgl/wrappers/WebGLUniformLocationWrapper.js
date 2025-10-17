/**
 * @author       Benjamin D. Richards <benjamindrichards@gmail.com>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Class = require('../../../utils/Class');

/**
 * @classdesc
 * Wrapper for a WebGL uniform location, containing all the information that was used to create it.
 *
 * A WebGLUniformLocation should never be exposed outside the WebGLRenderer,
 * so the WebGLRenderer can handle context loss and other events without other systems having to be aware of it.
 * Always use WebGLUniformLocationWrapper instead.
 *
 * @class WebGLUniformLocationWrapper
 * @memberof Phaser.Renderer.WebGL.Wrappers
 * @constructor
 * 
 *
 * @param {WebGLRenderingContext} gl - The WebGLRenderingContext to create the WebGLUniformLocation for.
 * @param {Phaser.Renderer.WebGL.Wrappers.WebGLProgramWrapper} program - The WebGLProgram that this location refers to. This must be created first.
 * @param {string} name - The name of this location, as defined in the shader source code.
 */
var WebGLUniformLocationWrapper = new Class({

    initialize:

        function WebGLUniformLocationWrapper(gl, program, name) {
            /**
             * The WebGLUniformLocation being wrapped by this class.
             *
             * This property could change at any time.
             * Therefore, you should never store a reference to this value.
             * It should only be passed directly to the WebGL API for drawing.
             *
             * @name Phaser.Renderer.WebGL.Wrappers.WebGLUniformLocationWrapper#webGLUniformLocation
             * @type {?WebGLUniformLocation}
             * @default null
             * 
             */
            this.webGLUniformLocation = null;

            /**
             * The WebGLRenderingContext that owns this location.
             *
             * @name Phaser.Renderer.WebGL.Wrappers.WebGLUniformLocationWrapper#gl
             * @type {WebGLRenderingContext}
             * 
             */
            this.gl = gl;

            /**
             * The WebGLProgram that this location refers to.
             *
             * @name Phaser.Renderer.WebGL.Wrappers.WebGLUniformLocationWrapper#program
             * @type {Phaser.Renderer.WebGL.Wrappers.WebGLProgramWrapper}
             * 
             */
            this.program = program;

            /**
             * The name of this location, as defined in the shader source code.
             *
             * @name Phaser.Renderer.WebGL.Wrappers.WebGLUniformLocationWrapper#name
             * @type {string}
             * 
             */
            this.name = name;

            this.createResource();
        },

    /**
     * Creates the WebGLUniformLocation.
     *
     * @method Phaser.Renderer.WebGL.Wrappers.WebGLUniformLocationWrapper#createResource
     * 
     */
    createResource: function () {
        if (this.program.webGLProgram === null) {
            this.webGLUniformLocation = null;
            return;
        }

        var gl = this.gl;

        if (gl.isContextLost()) {
            // GL state can't be updated right now.
            // `createResource` will run when the context is restored.
            return;
        }

        this.webGLUniformLocation = gl.getUniformLocation(this.program.webGLProgram, this.name);
    },

    /**
     * Destroys this WebGLUniformLocationWrapper.
     *
     * @method Phaser.Renderer.WebGL.Wrappers.WebGLUniformLocationWrapper#destroy
     * 
     */
    destroy: function () {
        this.gl = null;
        this.program = null;
        this.name = null;
        this.webGLUniformLocation = null;
    }
});

module.exports = WebGLUniformLocationWrapper;
