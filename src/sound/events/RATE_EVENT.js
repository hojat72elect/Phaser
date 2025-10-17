/**
 * The Sound Rate Change Event.
 *
 * This event is dispatched by both Web Audio and HTML5 Audio Sound objects when their rate changes.
 *
 * Listen to it from a Sound instance using `Sound.on('rate', listener)`, i.e.:
 *
 * ```javascript
 * var music = this.sound.add('key');
 * music.on('rate', listener);
 * music.play();
 * music.setRate(0.5);
 * ```
 *
 * @event Phaser.Sound.Events#RATE
 * @type {string}
 * 
 *
 * @param {(Phaser.Sound.WebAudioSound|Phaser.Sound.HTML5AudioSound)} sound - A reference to the Sound that emitted the event.
 * @param {number} rate - The new rate of the Sound.
 */
module.exports = 'rate';
