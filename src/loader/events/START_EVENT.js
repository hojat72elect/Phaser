/**
 * The Loader Plugin Start Event.
 *
 * This event is dispatched when the Loader starts running. At this point load progress is zero.
 *
 * This event is dispatched even if there aren't any files in the load queue.
 *
 * Listen to it from a Scene using: `this.load.on('start', listener)`.
 *
 * @event Phaser.Loader.Events#START
 * @type {string}
 * 
 *
 * @param {Phaser.Loader.LoaderPlugin} loader - A reference to the Loader Plugin that dispatched this event.
 */
module.exports = 'start';
