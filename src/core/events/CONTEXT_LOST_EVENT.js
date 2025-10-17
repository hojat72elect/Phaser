/**
 * The Game Context Lost Event.
 *
 * This event is dispatched by the Game if the WebGL Renderer it is using encounters a WebGL Context Lost event from the browser.
 *
 * The renderer halts all rendering and cannot resume after this happens.
 *
 * @event Phaser.Core.Events#CONTEXT_LOST
 * @type {string}
 * 
 */
module.exports = 'contextlost';
