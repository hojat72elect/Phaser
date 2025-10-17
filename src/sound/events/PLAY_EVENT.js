/**
 * The Sound Play Event.
 *
 * This event is dispatched by both Web Audio and HTML5 Audio Sound objects when they are played.
 *
 * Listen to it from a Sound instance using `Sound.on('play', listener)`, i.e.:
 *
 * ```javascript
 * var music = this.sound.add('key');
 * music.on('play', listener);
 * music.play();
 * ```
 *
 * @event Phaser.Sound.Events#PLAY
 * @type {string}
 * 
 *
 * @param {(Phaser.Sound.WebAudioSound|Phaser.Sound.HTML5AudioSound)} sound - A reference to the Sound that emitted the event.
 */
module.exports = 'play';
