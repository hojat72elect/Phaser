
var TYPE = require('../TYPE');

/**
 * The Impact Body Type component.
 * Should be applied as a mixin.
 *
 * @namespace Phaser.Physics.Impact.Components.BodyType
 * 
 */
var BodyType = {

    /**
     * [description]
     *
     * @method Phaser.Physics.Impact.Components.BodyType#getBodyType
     * 
     *
     * @return {number} [description]
     */
    getBodyType: function () {
        return this.body.type;
    },

    /**
     * [description]
     *
     * @method Phaser.Physics.Impact.Components.BodyType#setTypeNone
     * 
     *
     * @return {Phaser.GameObjects.GameObject} This Game Object.
     */
    setTypeNone: function () {
        this.body.type = TYPE.NONE;

        return this;
    },

    /**
     * [description]
     *
     * @method Phaser.Physics.Impact.Components.BodyType#setTypeA
     * 
     *
     * @return {Phaser.GameObjects.GameObject} This Game Object.
     */
    setTypeA: function () {
        this.body.type = TYPE.A;

        return this;
    },

    /**
     * [description]
     *
     * @method Phaser.Physics.Impact.Components.BodyType#setTypeB
     * 
     *
     * @return {Phaser.GameObjects.GameObject} This Game Object.
     */
    setTypeB: function () {
        this.body.type = TYPE.B;

        return this;
    }

};

module.exports = BodyType;
