/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Impact Offset component.
 * Should be applied as a mixin.
 *
 * @namespace Phaser.Physics.Impact.Components.Offset
 * 
 */
var Offset = {

    /**
     * [description]
     *
     * @method Phaser.Physics.Impact.Components.Offset#setOffset
     * 
     *
     * @param {number} x - [description]
     * @param {number} y - [description]
     * @param {number} [width] - [description]
     * @param {number} [height] - [description]
     *
     * @return {Phaser.GameObjects.GameObject} This Game Object.
     */
    setOffset: function (x, y, width, height) {
        this.body.offset.x = x;
        this.body.offset.y = y;

        if (width) {
            this.setBodySize(width, height);
        }

        return this;
    }

};

module.exports = Offset;
