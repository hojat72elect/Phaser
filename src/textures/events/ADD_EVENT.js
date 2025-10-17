/**
 * The Texture Add Event.
 *
 * This event is dispatched by the Texture Manager when a texture is added to it.
 *
 * Listen to this event from within a Scene using: `this.textures.on('addtexture', listener)`.
 *
 * @event Phaser.Textures.Events#ADD
 * @type {string}
 * 
 *
 * @param {string} key - The key of the Texture that was added to the Texture Manager.
 * @param {Phaser.Textures.Texture} texture - A reference to the Texture that was added to the Texture Manager.
 */
module.exports = 'addtexture';
