/**
 * The Game Step Event.
 *
 * This event is dispatched after the Game Pre-Step and before the Scene Manager steps.
 * Hook into it from plugins or systems that need to update before the Scene Manager does, but after the core Systems have.
 *
 * @event Phaser.Core.Events#STEP
 * @type {string}
 * 
 *
 * @param {number} time - The current time. Either a High Resolution Timer value if it comes from Request Animation Frame, or Date.now if using SetTimeout.
 * @param {number} delta - The delta time in ms since the last frame. This is a smoothed and capped value based on the FPS rate.
 */
module.exports = 'step';
