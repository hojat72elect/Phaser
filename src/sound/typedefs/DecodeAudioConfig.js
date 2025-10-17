/**
 * A Audio Data object.
 *
 * You can pass an array of these objects to the WebAudioSoundManager `decodeAudio` method to have it decode
 * them all at once.
 *
 * @typedef {object} Phaser.Types.Sound.DecodeAudioConfig
 * 
 *
 * @property {string} key - The string-based key to be used to reference the decoded audio in the audio cache.
 * @property {(ArrayBuffer|string)} data - The audio data, either a base64 encoded string, an audio media-type data uri, or an ArrayBuffer instance.
 */
