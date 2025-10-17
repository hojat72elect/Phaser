/**
 * The Destroy Camera Event.
 *
 * This event is dispatched by a Camera instance when it is destroyed by the Camera Manager.
 *
 * Listen for it via either of the following:
 *
 * ```js
 * this.cameras.main.on('cameradestroy', () => {});
 * ```
 *
 * or use the constant, to avoid having to remember the correct event string:
 *
 * ```js
 * this.cameras.main.on(Phaser.Cameras.Scene2D.Events.DESTROY, () => {});
 * ```
 *
 * @event Phaser.Cameras.Scene2D.Events#DESTROY
 * @type {string}
 * 
 *
 * @param {Phaser.Cameras.Scene2D.BaseCamera} camera - The camera that was destroyed.
 */
module.exports = 'cameradestroy';
