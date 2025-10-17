/**
 * The Particle Emitter Death Zone Event.
 *
 * This event is dispatched when a Death Zone kills a Particle instance.
 *
 * Listen for it on a Particle Emitter instance using `ParticleEmitter.on('deathzone', listener)`.
 *
 * If you wish to know when the final particle is killed, see the `COMPLETE` event.
 *
 * @event Phaser.GameObjects.Particles.Events#DEATH_ZONE
 * @type {string}
 * 
 *
 * @param {Phaser.GameObjects.Particles.ParticleEmitter} emitter - A reference to the Particle Emitter that owns the Particle and Death Zone.
 * @param {Phaser.GameObjects.Particles.Particle} particle - The Particle that has been killed.
 * @param {Phaser.GameObjects.Particles.Zones.DeathZone} zone - The Death Zone that killed the particle.
 */
module.exports = 'deathzone';
