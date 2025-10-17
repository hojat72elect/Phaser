/**
 * The Game Object Added to Scene Event.
 *
 * This event is dispatched when a Game Object is added to a Scene.
 *
 * Listen for it from a Scene using `this.events.on('addedtoscene', listener)`.
 *
 * @event Phaser.Scenes.Events#ADDED_TO_SCENE
 * @type {string}
 * 
 *
 * @param {Phaser.GameObjects.GameObject} gameObject - The Game Object that was added to the Scene.
 * @param {Phaser.Scene} scene - The Scene to which the Game Object was added.
 */
module.exports = 'addedtoscene';
