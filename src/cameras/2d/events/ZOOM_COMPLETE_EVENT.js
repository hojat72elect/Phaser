/**
 * The Camera Zoom Complete Event.
 *
 * This event is dispatched by a Camera instance when the Zoom Effect completes.
 *
 * Listen for it via either of the following:
 *
 * ```js
 * this.cameras.main.on('camerazoomcomplete', () => {});
 * ```
 *
 * or use the constant, to avoid having to remember the correct event string:
 *
 * ```js
 * this.cameras.main.on(Phaser.Cameras.Scene2D.Events.ZOOM_COMPLETE, () => {});
 * ```
 *
 * @event Phaser.Cameras.Scene2D.Events#ZOOM_COMPLETE
 * @type {string}
 * 
 *
 * @param {Phaser.Cameras.Scene2D.Camera} camera - The camera that the effect began on.
 * @param {Phaser.Cameras.Scene2D.Effects.Zoom} effect - A reference to the effect instance.
 */
module.exports = 'camerazoomcomplete';
