/**
 * @typedef {object} Phaser.Physics.Matter.Events.SleepStartEvent
 *
 * @property {any} source - The source object of the event.
 * @property {string} name - The name of the event.
 */

/**
 * The Matter Physics Sleep Start Event.
 *
 * This event is dispatched by a Matter Physics World instance when a Body goes to sleep.
 *
 * Listen to it from a Scene using: `this.matter.world.on('sleepstart', listener)`.
 *
 * @event Phaser.Physics.Matter.Events#SLEEP_START
 * @type {string}
 * 
 *
 * @param {Phaser.Physics.Matter.Events.SleepStartEvent} event - The Sleep Event object.
 * @param {MatterJS.BodyType} body - The body that has gone to sleep.
 */
module.exports = 'sleepstart';
