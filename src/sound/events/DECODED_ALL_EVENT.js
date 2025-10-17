/**
 * The Audio Data Decoded All Event.
 *
 * This event is dispatched by the Web Audio Sound Manager as a result of calling the `decodeAudio` method,
 * once all files passed to the method have been decoded (or errored).
 *
 * Use `Phaser.Sound.Events#DECODED` to listen for single sounds being decoded, and `DECODED_ALL` to
 * listen for them all completing.
 *
 * Listen to it from the Sound Manager in a Scene using `this.sound.on('decodedall', listener)`, i.e.:
 *
 * ```javascript
 * this.sound.once('decodedall', handler);
 * this.sound.decodeAudio([ audioFiles ]);
 * ```
 *
 * @event Phaser.Sound.Events#DECODED_ALL
 * @type {string}
 * 
 */
module.exports = 'decodedall';
