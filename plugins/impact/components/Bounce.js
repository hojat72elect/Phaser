
/**
 * The Impact Bounce component.
 * Should be applied as a mixin.
 *
 * @namespace Phaser.Physics.Impact.Components.Bounce
 * 
 */
var Bounce = {

    /**
     * Sets the impact physics bounce, or restitution, value.
     *
     * @method Phaser.Physics.Impact.Components.Bounce#setBounce
     * 
     *
     * @param {number} value - A value between 0 (no rebound) and 1 (full rebound)
     *
     * @return {Phaser.GameObjects.GameObject} This Game Object.
     */
    setBounce: function (value) {
        this.body.bounciness = value;

        return this;
    },

    /**
     * Sets the minimum velocity the body is allowed to be moving to be considered for rebound.
     *
     * @method Phaser.Physics.Impact.Components.Bounce#setMinBounceVelocity
     * 
     *
     * @param {number} value - The minimum allowed velocity.
     *
     * @return {Phaser.GameObjects.GameObject} This Game Object.
     */
    setMinBounceVelocity: function (value) {
        this.body.minBounceVelocity = value;

        return this;
    },

    /**
     * The bounce, or restitution, value of this body.
     * A value between 0 (no rebound) and 1 (full rebound)
     *
     * @name Phaser.Physics.Impact.Components.Bounce#bounce
     * @type {number}
     * 
     */
    bounce: {

        get: function () {
            return this.body.bounciness;
        },

        set: function (value) {
            this.body.bounciness = value;
        }

    }

};

module.exports = Bounce;
