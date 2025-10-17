/**
 * The Input Manager Process Event.
 *
 * This internal event is dispatched by the Input Manager when not using the legacy queue system,
 * and it wants the Input Plugins to update themselves.
 *
 * @event Phaser.Input.Events#MANAGER_PROCESS
 * @type {string}
 * 
 *
 * @param {number} time - The current time. Either a High Resolution Timer value if it comes from Request Animation Frame, or Date.now if using SetTimeout.
 * @param {number} delta - The delta time in ms since the last frame. This is a smoothed and capped value based on the FPS rate.
 */
module.exports = 'process';
