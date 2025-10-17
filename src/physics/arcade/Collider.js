var Class = require('../../utils/Class');

/**
 * @classdesc
 * An Arcade Physics Collider will automatically check for collision, or overlaps, between two objects
 * every step. If a collision, or overlap, occurs it will invoke the given callbacks.
 *
 * Note, if setting `overlapOnly` to `true`, and one of the objects is a `TilemapLayer`, every tile in the layer, regardless of tile ID, will be checked for collision.
 * Even if the layer has had only a subset of tile IDs enabled for collision, all tiles will still be checked for overlap.
 *
 * @class Collider
 * @memberof Phaser.Physics.Arcade
 * @constructor
 * 
 *
 * @param {Phaser.Physics.Arcade.World} world - The Arcade physics World that will manage the collisions.
 * @param {boolean} overlapOnly - Whether to check for collisions or overlaps.
 * @param {Phaser.Types.Physics.Arcade.ArcadeColliderType} object1 - The first object to check for collision.
 * @param {Phaser.Types.Physics.Arcade.ArcadeColliderType} object2 - The second object to check for collision.
 * @param {Phaser.Types.Physics.Arcade.ArcadePhysicsCallback} collideCallback - The callback to invoke when the two objects collide.
 * @param {Phaser.Types.Physics.Arcade.ArcadePhysicsCallback} processCallback - The callback to invoke when the two objects collide. Must return a boolean.
 * @param {any} callbackContext - The scope in which to call the callbacks.
 */
var Collider = new Class({

    initialize:

        function Collider(world, overlapOnly, object1, object2, collideCallback, processCallback, callbackContext) {
            /**
             * The world in which the bodies will collide.
             *
             * @name Phaser.Physics.Arcade.Collider#world
             * @type {Phaser.Physics.Arcade.World}
             * 
             */
            this.world = world;

            /**
             * The name of the collider (unused by Phaser).
             *
             * @name Phaser.Physics.Arcade.Collider#name
             * @type {string}
             * @since 3.1.0
             */
            this.name = '';

            /**
             * Whether the collider is active.
             *
             * @name Phaser.Physics.Arcade.Collider#active
             * @type {boolean}
             * @default true
             * 
             */
            this.active = true;

            /**
             * Whether to check for collisions or overlaps.
             *
             * @name Phaser.Physics.Arcade.Collider#overlapOnly
             * @type {boolean}
             * 
             */
            this.overlapOnly = overlapOnly;

            /**
             * The first object to check for collision.
             *
             * @name Phaser.Physics.Arcade.Collider#object1
             * @type {Phaser.Types.Physics.Arcade.ArcadeColliderType}
             * 
             */
            this.object1 = object1;

            /**
             * The second object to check for collision.
             *
             * @name Phaser.Physics.Arcade.Collider#object2
             * @type {Phaser.Types.Physics.Arcade.ArcadeColliderType}
             * 
             */
            this.object2 = object2;

            /**
             * The callback to invoke when the two objects collide.
             *
             * @name Phaser.Physics.Arcade.Collider#collideCallback
             * @type {Phaser.Types.Physics.Arcade.ArcadePhysicsCallback}
             * 
             */
            this.collideCallback = collideCallback;

            /**
             * If a processCallback exists it must return true or collision checking will be skipped.
             *
             * @name Phaser.Physics.Arcade.Collider#processCallback
             * @type {Phaser.Types.Physics.Arcade.ArcadePhysicsCallback}
             * 
             */
            this.processCallback = processCallback;

            /**
             * The context the collideCallback and processCallback will run in.
             *
             * @name Phaser.Physics.Arcade.Collider#callbackContext
             * @type {object}
             * 
             */
            this.callbackContext = callbackContext;
        },

    /**
     * A name for the Collider.
     *
     * Phaser does not use this value, it's for your own reference.
     *
     * @method Phaser.Physics.Arcade.Collider#setName
     * @since 3.1.0
     *
     * @param {string} name - The name to assign to the Collider.
     *
     * @return {Phaser.Physics.Arcade.Collider} This Collider instance.
     */
    setName: function (name) {
        this.name = name;

        return this;
    },

    /**
     * Called by World as part of its step processing, initial operation of collision checking.
     *
     * @method Phaser.Physics.Arcade.Collider#update
     * 
     */
    update: function () {
        this.world.collideObjects(
            this.object1,
            this.object2,
            this.collideCallback,
            this.processCallback,
            this.callbackContext,
            this.overlapOnly
        );
    },

    /**
     * Removes Collider from World and disposes of its resources.
     *
     * @method Phaser.Physics.Arcade.Collider#destroy
     * 
     */
    destroy: function () {
        this.world.removeCollider(this);

        this.active = false;

        this.world = null;

        this.object1 = null;
        this.object2 = null;

        this.collideCallback = null;
        this.processCallback = null;
        this.callbackContext = null;
    }

});

module.exports = Collider;
