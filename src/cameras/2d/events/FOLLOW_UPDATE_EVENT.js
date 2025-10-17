/**
 * The Camera Follower Update Event.
 *
 * This event is dispatched by a Camera instance when it is following a
 * Game Object and the Camera position has been updated as a result of
 * that following.
 *
 * Listen to it from a Camera instance using: `camera.on('followupdate', listener)`.
 *
 * @event Phaser.Cameras.Scene2D.Events#FOLLOW_UPDATE
 * @type {string}
 * 
 *
 * @param {Phaser.Cameras.Scene2D.BaseCamera} camera - The camera that emitted the event.
 * @param {Phaser.GameObjects.GameObject} gameObject - The Game Object the camera is following.
 */
module.exports = 'followupdate';
