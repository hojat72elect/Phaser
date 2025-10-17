/**
 * The Camera Post-Render Event.
 *
 * This event is dispatched by a Camera instance after is has finished rendering.
 * It is only dispatched if the Camera is rendering to a texture.
 *
 * Listen to it from a Camera instance using: `camera.on('postrender', listener)`.
 *
 * @event Phaser.Cameras.Scene2D.Events#POST_RENDER
 * @type {string}
 * 
 *
 * @param {Phaser.Cameras.Scene2D.BaseCamera} camera - The camera that has finished rendering to a texture.
 */
module.exports = 'postrender';
