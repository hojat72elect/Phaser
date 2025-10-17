/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var TYPE = require('../TYPE');

/**
 * The Impact Check Against component.
 * Should be applied as a mixin.
 *
 * @namespace Phaser.Physics.Impact.Components.CheckAgainst
 * 
 */
var CheckAgainst = {

    /**
     * [description]
     *
     * @method Phaser.Physics.Impact.Components.CheckAgainst#setAvsB
     * 
     *
     * @return {Phaser.GameObjects.GameObject} This Game Object.
     */
    setAvsB: function () {
        this.setTypeA();

        return this.setCheckAgainstB();
    },

    /**
     * [description]
     *
     * @method Phaser.Physics.Impact.Components.CheckAgainst#setBvsA
     * 
     *
     * @return {Phaser.GameObjects.GameObject} This Game Object.
     */
    setBvsA: function () {
        this.setTypeB();

        return this.setCheckAgainstA();
    },

    /**
     * [description]
     *
     * @method Phaser.Physics.Impact.Components.CheckAgainst#setCheckAgainstNone
     * 
     *
     * @return {Phaser.GameObjects.GameObject} This Game Object.
     */
    setCheckAgainstNone: function () {
        this.body.checkAgainst = TYPE.NONE;

        return this;
    },

    /**
     * [description]
     *
     * @method Phaser.Physics.Impact.Components.CheckAgainst#setCheckAgainstA
     * 
     *
     * @return {Phaser.GameObjects.GameObject} This Game Object.
     */
    setCheckAgainstA: function () {
        this.body.checkAgainst = TYPE.A;

        return this;
    },

    /**
     * [description]
     *
     * @method Phaser.Physics.Impact.Components.CheckAgainst#setCheckAgainstB
     * 
     *
     * @return {Phaser.GameObjects.GameObject} This Game Object.
     */
    setCheckAgainstB: function () {
        this.body.checkAgainst = TYPE.B;

        return this;
    },

    /**
     * [description]
     *
     * @name Phaser.Physics.Impact.Components.CheckAgainst#checkAgainst
     * @type {number}
     * 
     */
    checkAgainst: {

        get: function () {
            return this.body.checkAgainst;
        },

        set: function (value) {
            this.body.checkAgainst = value;
        }

    }

};

module.exports = CheckAgainst;
