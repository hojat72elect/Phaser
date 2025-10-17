/**
 * The Sound Stop Event.
 *
 * This event is dispatched by both Web Audio and HTML5 Audio Sound objects when they are stopped.
 *
 * Listen to it from a Sound instance using `Sound.on('stop', listener)`, i.e.:
 *
 * ```javascript
 * var music = this.sound.add('key');
 * music.on('stop', listener);
 * music.play();
 * music.stop();
 * ```
 *
 * @event Phaser.Sound.Events#STOP
 * @type {string}
 * 
 *
 * @param {(Phaser.Sound.WebAudioSound|Phaser.Sound.HTML5AudioSound)} sound - A reference to the Sound that emitted the event.
 */
module.exports = 'stop';
