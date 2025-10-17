/**
 * The Scene Systems Start Event.
 *
 * This event is dispatched by a Scene during the Scene Systems start process. Primarily used by Scene Plugins.
 *
 * Listen to it from a Scene using `this.events.on('start', listener)`.
 *
 * @event Phaser.Scenes.Events#START
 * @type {string}
 * 
 *
 * @param {Phaser.Scenes.Systems} sys - A reference to the Scene Systems class of the Scene that emitted this event.
 */
module.exports = 'start';
