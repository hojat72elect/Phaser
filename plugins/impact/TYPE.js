
/**
 * Collision Types - Determine if and how entities collide with each other.
 *
 * In ACTIVE vs. LITE or FIXED vs. ANY collisions, only the "weak" entity moves,
 * while the other one stays fixed. In ACTIVE vs. ACTIVE and ACTIVE vs. PASSIVE
 * collisions, both entities are moved. LITE or PASSIVE entities don't collide
 * with other LITE or PASSIVE entities at all. The behavior for FIXED vs.
 * FIXED collisions is undefined.
 *
 * @namespace Phaser.Physics.Impact.TYPE
 * @memberof Phaser.Physics.Impact
 * 
 */
module.exports = {

    /**
     * Collides with nothing.
     *
     * @name Phaser.Physics.Impact.TYPE.NONE
     * @type {integer}
     * @const
     * 
     */
    NONE: 0,

    /**
     * Type A. Collides with Type B.
     *
     * @name Phaser.Physics.Impact.TYPE.A
     * @type {integer}
     * @const
     * 
     */
    A: 1,

    /**
     * Type B. Collides with Type A.
     *
     * @name Phaser.Physics.Impact.TYPE.B
     * @type {integer}
     * @const
     * 
     */
    B: 2,

    /**
     * Collides with both types A and B.
     *
     * @name Phaser.Physics.Impact.TYPE.BOTH
     * @type {integer}
     * @const
     * 
     */
    BOTH: 3

};
