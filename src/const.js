/**
 * Global constants.
 *
 * @ignore
 */

var CONST = {

    /**
     * Phaser Release Version
     *
     * @name Phaser.VERSION
     * @const
     * @type {string}
     * 
     */
    VERSION: '3.90.0',

    /**
     * Phaser Release Version as displayed in the console.log header URL.
     *
     * @name Phaser.LOG_VERSION
     * @const
     * @type {string}
     * 
     */
    LOG_VERSION: 'v390',

    BlendModes: require('./renderer/BlendModes'),

    ScaleModes: require('./renderer/ScaleModes'),

    /**
     * This setting will auto-detect if the browser is capable of suppporting WebGL.
     * If it is, it will use the WebGL Renderer. If not, it will fall back to the Canvas Renderer.
     *
     * @name Phaser.AUTO
     * @const
     * @type {number}
     * 
     */
    AUTO: 0,

    /**
     * Forces Phaser to only use the Canvas Renderer, regardless if the browser supports
     * WebGL or not.
     *
     * @name Phaser.CANVAS
     * @const
     * @type {number}
     * 
     */
    CANVAS: 1,

    /**
     * Forces Phaser to use the WebGL Renderer. If the browser does not support it, there is
     * no fallback to Canvas with this setting, so you should trap it and display a suitable
     * message to the user.
     *
     * @name Phaser.WEBGL
     * @const
     * @type {number}
     * 
     */
    WEBGL: 2,

    /**
     * A Headless Renderer doesn't create either a Canvas or WebGL Renderer. However, it still
     * absolutely relies on the DOM being present and available. This mode is meant for unit testing,
     * not for running Phaser on the server, which is something you really shouldn't do.
     *
     * @name Phaser.HEADLESS
     * @const
     * @type {number}
     * 
     */
    HEADLESS: 3,

    /**
     * In Phaser the value -1 means 'forever' in lots of cases, this const allows you to use it instead
     * to help you remember what the value is doing in your code.
     *
     * @name Phaser.FOREVER
     * @const
     * @type {number}
     * 
     */
    FOREVER: -1,

    /**
     * Direction constant.
     *
     * @name Phaser.NONE
     * @const
     * @type {number}
     * 
     */
    NONE: 4,

    /**
     * Direction constant.
     *
     * @name Phaser.UP
     * @const
     * @type {number}
     * 
     */
    UP: 5,

    /**
     * Direction constant.
     *
     * @name Phaser.DOWN
     * @const
     * @type {number}
     * 
     */
    DOWN: 6,

    /**
     * Direction constant.
     *
     * @name Phaser.LEFT
     * @const
     * @type {number}
     * 
     */
    LEFT: 7,

    /**
     * Direction constant.
     *
     * @name Phaser.RIGHT
     * @const
     * @type {number}
     * 
     */
    RIGHT: 8

};

module.exports = CONST;
