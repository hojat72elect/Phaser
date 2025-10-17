/**
 * Phaser Scale Manager constants for zoom modes.
 *
 * @namespace Phaser.Scale.Zoom
 * @memberof Phaser.Scale
 * 
 */

/**
 * Phaser Scale Manager constants for zoom modes.
 *
 * To find out what each mode does please see [Phaser.Scale.Zoom]{@link Phaser.Scale.Zoom}.
 *
 * @typedef {Phaser.Scale.Zoom} Phaser.Scale.ZoomType
 * @memberof Phaser.Scale
 * 
 */

module.exports = {

    /**
     * The game canvas will not be zoomed by Phaser.
     *
     * @name Phaser.Scale.Zoom.NO_ZOOM
     * @type {number}
     * @const
     * 
     */
    NO_ZOOM: 1,

    /**
     * The game canvas will be 2x zoomed by Phaser.
     *
     * @name Phaser.Scale.Zoom.ZOOM_2X
     * @type {number}
     * @const
     * 
     */
    ZOOM_2X: 2,

    /**
     * The game canvas will be 4x zoomed by Phaser.
     *
     * @name Phaser.Scale.Zoom.ZOOM_4X
     * @type {number}
     * @const
     * 
     */
    ZOOM_4X: 4,

    /**
     * Calculate the zoom value based on the maximum multiplied game size that will
     * fit into the parent, or browser window if no parent is set.
     *
     * @name Phaser.Scale.Zoom.MAX_ZOOM
     * @type {number}
     * @const
     * 
     */
    MAX_ZOOM: -1

};
