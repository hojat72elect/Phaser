

/**
 * The Impact Set Game Object component.
 * Should be applied as a mixin.
 *
 * @namespace Phaser.Physics.Impact.Components.SetGameObject
 * 
 */
var SetGameObject = {

    /**
     * [description]
     *
     * @method Phaser.Physics.Impact.Components.SetGameObject#setGameObject
     * 
     *
     * @param {Phaser.GameObjects.GameObject} gameObject - [description]
     * @param {boolean} [sync=true] - [description]
     *
     * @return {Phaser.GameObjects.GameObject} This Game Object.
     */
    setGameObject: function (gameObject, sync) {
        if (sync === undefined) {
            sync = true;
        }

        if (gameObject) {
            this.body.gameObject = gameObject;

            if (sync) {
                this.syncGameObject();
            }
        } else {
            this.body.gameObject = null;
        }

        return this;
    },

    /**
     * [description]
     *
     * @method Phaser.Physics.Impact.Components.SetGameObject#syncGameObject
     * 
     *
     * @return {Phaser.GameObjects.GameObject} This Game Object.
     */
    syncGameObject: function () {
        var gameObject = this.body.gameObject;

        if (gameObject) {
            this.setBodySize(gameObject.width * gameObject.scaleX, gameObject.height * gameObject.scaleY);
        }

        return this;
    }

};

module.exports = SetGameObject;
