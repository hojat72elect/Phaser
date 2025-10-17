/**
 * @author       Richard Davey <rich@phaser.io>
 * @author       Pavle Goloskokovic <pgoloskokovic@gmail.com> (http://prunegames.com)
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var BaseSoundManager = require('../BaseSoundManager');
var Class = require('../../utils/Class');
var EventEmitter = require('eventemitter3');
var NoAudioSound = require('./NoAudioSound');
var NOOP = require('../../utils/NOOP');

/**
 * @classdesc
 * No-audio implementation of the Sound Manager. It is used if audio has been
 * disabled in the game config or the device doesn't support any audio.
 *
 * It represents a graceful degradation of Sound Manager logic that provides
 * minimal functionality and prevents Phaser projects that use audio from
 * breaking on devices that don't support any audio playback technologies.
 *
 * @class NoAudioSoundManager
 * @extends Phaser.Sound.BaseSoundManager
 * @memberof Phaser.Sound
 * @constructor
 * 
 *
 * @param {Phaser.Game} game - Reference to the current game instance.
 */
var NoAudioSoundManager = new Class({

    Extends: EventEmitter,

    initialize:

        function NoAudioSoundManager(game) {
            EventEmitter.call(this);

            this.game = game;
            this.sounds = [];
            this.mute = false;
            this.volume = 1;
            this.rate = 1;
            this.detune = 0;
            this.pauseOnBlur = true;
            this.locked = false;
        },

    /**
     * Adds a new sound into the sound manager.
     *
     * @method Phaser.Sound.NoAudioSoundManager#add
     * 
     *
     * @param {string} key - Asset key for the sound.
     * @param {Phaser.Types.Sound.SoundConfig} [config] - An optional config object containing default sound settings.
     *
     * @return {Phaser.Sound.NoAudioSound} The new sound instance.
     */
    add: function (key, config) {
        var sound = new NoAudioSound(this, key, config);

        this.sounds.push(sound);

        return sound;
    },

    /**
     * Adds a new audio sprite sound into the sound manager.
     * Audio Sprites are a combination of audio files and a JSON configuration.
     * The JSON follows the format of that created by https://github.com/tonistiigi/audiosprite
     *
     * @method Phaser.Sound.NoAudioSoundManager#addAudioSprite
     * 
     *
     * @param {string} key - Asset key for the sound.
     * @param {Phaser.Types.Sound.SoundConfig} [config] - An optional config object containing default sound settings.
     *
     * @return {Phaser.Sound.NoAudioSound} The new audio sprite sound instance.
     */
    addAudioSprite: function (key, config) {
        var sound = this.add(key, config);

        sound.spritemap = {};

        return sound;
    },

    /**
     * Gets the first sound in the manager matching the given key, if any.
     *
     * @method Phaser.Sound.NoAudioSoundManager#get
     * 
     *
     * @generic {Phaser.Sound.BaseSound} T
     * @genericUse {T} - [$return]
     *
     * @param {string} key - Sound asset key.
     *
     * @return {?Phaser.Sound.BaseSound} - The sound, or null.
     */
    get: function (key) {
        return BaseSoundManager.prototype.get.call(this, key);
    },

    /**
     * Gets any sounds in the manager matching the given key.
     *
     * @method Phaser.Sound.NoAudioSoundManager#getAll
     * 
     *
     * @generic {Phaser.Sound.BaseSound} T
     * @genericUse {T[]} - [$return]
     *
     * @param {string} key - Sound asset key.
     *
     * @return {Phaser.Sound.BaseSound[]} - The sounds, or an empty array.
     */
    getAll: function (key) {
        return BaseSoundManager.prototype.getAll.call(this, key);
    },

    /**
     * This method does nothing but return 'false' for the No Audio Sound Manager, to maintain
     * compatibility with the other Sound Managers.
     *
     * @method Phaser.Sound.NoAudioSoundManager#play
     * 
     *
     * @param {string} key - Asset key for the sound.
     * @param {(Phaser.Types.Sound.SoundConfig|Phaser.Types.Sound.SoundMarker)} [extra] - An optional additional object containing settings to be applied to the sound. It could be either config or marker object.
     *
     * @return {boolean} Always 'false' for the No Audio Sound Manager.
     */
    // eslint-disable-next-line no-unused-vars
    play: function (key, extra) {
        return false;
    },

    /**
     * This method does nothing but return 'false' for the No Audio Sound Manager, to maintain
     * compatibility with the other Sound Managers.
     *
     * @method Phaser.Sound.NoAudioSoundManager#playAudioSprite
     * 
     *
     * @param {string} key - Asset key for the sound.
     * @param {string} spriteName - The name of the sound sprite to play.
     * @param {Phaser.Types.Sound.SoundConfig} [config] - An optional config object containing default sound settings.
     *
     * @return {boolean} Always 'false' for the No Audio Sound Manager.
     */
    // eslint-disable-next-line no-unused-vars
    playAudioSprite: function (key, spriteName, config) {
        return false;
    },

    /**
     * Removes a sound from the sound manager.
     * The removed sound is destroyed before removal.
     *
     * @method Phaser.Sound.NoAudioSoundManager#remove
     * 
     *
     * @param {Phaser.Sound.BaseSound} sound - The sound object to remove.
     *
     * @return {boolean} True if the sound was removed successfully, otherwise false.
     */
    remove: function (sound) {
        return BaseSoundManager.prototype.remove.call(this, sound);
    },

    /**
     * Removes all sounds from the manager, destroying the sounds.
     *
     * @method Phaser.Sound.NoAudioSoundManager#removeAll
     * 
     */
    removeAll: function () {
        return BaseSoundManager.prototype.removeAll.call(this);
    },

    /**
     * Removes all sounds from the sound manager that have an asset key matching the given value.
     * The removed sounds are destroyed before removal.
     *
     * @method Phaser.Sound.NoAudioSoundManager#removeByKey
     * 
     *
     * @param {string} key - The key to match when removing sound objects.
     *
     * @return {number} The number of matching sound objects that were removed.
     */
    removeByKey: function (key) {
        return BaseSoundManager.prototype.removeByKey.call(this, key);
    },

    /**
     * Stops any sounds matching the given key.
     *
     * @method Phaser.Sound.NoAudioSoundManager#stopByKey
     * 
     *
     * @param {string} key - Sound asset key.
     *
     * @return {number} - How many sounds were stopped.
     */
    stopByKey: function (key) {
        return BaseSoundManager.prototype.stopByKey.call(this, key);
    },

    /**
     * Empty function for the No Audio Sound Manager.
     *
     * @method Phaser.Sound.NoAudioSoundManager#onBlur
     * 
     */
    onBlur: NOOP,

    /**
     * Empty function for the No Audio Sound Manager.
     *
     * @method Phaser.Sound.NoAudioSoundManager#onFocus
     * 
     */
    onFocus: NOOP,

    /**
     * Empty function for the No Audio Sound Manager.
     *
     * @method Phaser.Sound.NoAudioSoundManager#onGameBlur
     * 
     */
    onGameBlur: NOOP,

    /**
     * Empty function for the No Audio Sound Manager.
     *
     * @method Phaser.Sound.NoAudioSoundManager#onGameFocus
     * 
     */
    onGameFocus: NOOP,

    /**
     * Empty function for the No Audio Sound Manager.
     *
     * @method Phaser.Sound.NoAudioSoundManager#pauseAll
     * 
     */
    pauseAll: NOOP,

    /**
     * Empty function for the No Audio Sound Manager.
     *
     * @method Phaser.Sound.NoAudioSoundManager#resumeAll
     * 
     */
    resumeAll: NOOP,

    /**
     * Empty function for the No Audio Sound Manager.
     *
     * @method Phaser.Sound.NoAudioSoundManager#stopAll
     * 
     */
    stopAll: NOOP,

    /**
     * Empty function for the No Audio Sound Manager.
     *
     * @method Phaser.Sound.NoAudioSoundManager#update
     * 
     */
    update: NOOP,

    /**
     * Empty function for the No Audio Sound Manager.
     *
     * @method Phaser.Sound.NoAudioSoundManager#setRate
     * 
     *
     * @return {this} This Sound Manager.
     */
    setRate: NOOP,

    /**
     * Empty function for the No Audio Sound Manager.
     *
     * @method Phaser.Sound.NoAudioSoundManager#setDetune
     * 
     *
     * @return {this} This Sound Manager.
     */
    setDetune: NOOP,

    /**
     * Empty function for the No Audio Sound Manager.
     *
     * @method Phaser.Sound.NoAudioSoundManager#setMute
     * 
     */
    setMute: NOOP,

    /**
     * Empty function for the No Audio Sound Manager.
     *
     * @method Phaser.Sound.NoAudioSoundManager#setVolume
     * 
     */
    setVolume: NOOP,

    /**
     * Empty function for the No Audio Sound Manager.
     *
     * @method Phaser.Sound.NoAudioSoundManager#unlock
     * 
     */
    unlock: NOOP,

    /**
     * Method used internally for iterating only over active sounds and skipping sounds that are marked for removal.
     *
     * @method Phaser.Sound.NoAudioSoundManager#forEachActiveSound
     * @private
     * 
     *
     * @param {Phaser.Types.Sound.EachActiveSoundCallback} callback - Callback function. (manager: Phaser.Sound.BaseSoundManager, sound: Phaser.Sound.BaseSound, index: number, sounds: Phaser.Manager.BaseSound[]) => void
     * @param {*} [scope] - Callback context.
     */
    forEachActiveSound: function (callbackfn, scope) {
        BaseSoundManager.prototype.forEachActiveSound.call(this, callbackfn, scope);
    },

    /**
     * Destroys all the sounds in the game and all associated events.
     *
     * @method Phaser.Sound.NoAudioSoundManager#destroy
     * 
     */
    destroy: function () {
        BaseSoundManager.prototype.destroy.call(this);
    }

});

module.exports = NoAudioSoundManager;
