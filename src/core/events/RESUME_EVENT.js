/**
 * The Game Resume Event.
 *
 * This event is dispatched when the game loop leaves a paused state and resumes running.
 *
 * @event Phaser.Core.Events#RESUME
 * @type {string}
 * 
 *
 * @param {number} pauseDuration - The duration, in ms, that the game was paused for, or 0 if {@link Phaser.Game#resume} was called.
 */
module.exports = 'resume';
