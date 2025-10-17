
/**
 * Collision Types - Determine if and how entities collide with each other.
 *
 * In ACTIVE vs. LITE or FIXED vs. ANY collisions, only the "weak" entity moves,
 * while the other one stays fixed. In ACTIVE vs. ACTIVE and ACTIVE vs. PASSIVE
 * collisions, both entities are moved. LITE or PASSIVE entities don't collide
 * with other LITE or PASSIVE entities at all. The behavior for FIXED vs.
 * FIXED collisions is undefined.
 *
 * @namespace Phaser.Physics.Impact.COLLIDES
 * @memberof Phaser.Physics.Impact
 * 
 */

module.exports = {

    /**
     * Never collides.
     *
     * @name Phaser.Physics.Impact.COLLIDES.NEVER
     * @type {integer}
     * @const
     * 
     */
    NEVER: 0,

    /**
     * Lite collision.
     *
     * @name Phaser.Physics.Impact.COLLIDES.LITE
     * @type {integer}
     * @const
     * 
     */
    LITE: 1,

    /**
     * Passive collision.
     *
     * @name Phaser.Physics.Impact.COLLIDES.PASSIVE
     * @type {integer}
     * @const
     * 
     */
    PASSIVE: 2,

    /**
     * Active collision.
     *
     * @name Phaser.Physics.Impact.COLLIDES.ACTIVE
     * @type {integer}
     * @const
     * 
     */
    ACTIVE: 4,

    /**
     * Fixed collision.
     *
     * @name Phaser.Physics.Impact.COLLIDES.FIXED
     * @type {integer}
     * @const
     * 
     */
    FIXED: 8

};
