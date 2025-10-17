/**
 * The Scene Systems Boot Event.
 *
 * This event is dispatched by a Scene during the Scene Systems boot process. Primarily used by Scene Plugins.
 *
 * Listen to it from a Scene using `this.events.on('boot', listener)`.
 *
 * @event Phaser.Scenes.Events#BOOT
 * @type {string}
 * 
 *
 * @param {Phaser.Scenes.Systems} sys - A reference to the Scene Systems class of the Scene that emitted this event.
 */
module.exports = 'boot';
