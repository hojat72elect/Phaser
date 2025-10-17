/**
 * The Particle Emitter Explode Event.
 *
 * This event is dispatched when a Particle Emitter explodes a set of particles.
 *
 * Listen for it on a Particle Emitter instance using `ParticleEmitter.on('explode', listener)`.
 *
 * @event Phaser.GameObjects.Particles.Events#EXPLODE
 * @type {string}
 * 
 *
 * @param {Phaser.GameObjects.Particles.ParticleEmitter} emitter - A reference to the Particle Emitter that just completed.
 * @param {Phaser.GameObjects.Particles.Particle} particle - The most recently emitted Particle.
 */
module.exports = 'explode';
