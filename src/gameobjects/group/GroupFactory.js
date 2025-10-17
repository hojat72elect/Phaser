var Group = require('./Group');
var GameObjectFactory = require('../GameObjectFactory');

/**
 * Creates a new Group Game Object and adds it to the Scene.
 *
 * Note: This method will only be available if the Group Game Object has been built into Phaser.
 *
 * @method Phaser.GameObjects.GameObjectFactory#group
 * 
 *
 * @param {(Phaser.GameObjects.GameObject[]|Phaser.Types.GameObjects.Group.GroupConfig|Phaser.Types.GameObjects.Group.GroupConfig[]|Phaser.Types.GameObjects.Group.GroupCreateConfig)} [children] - Game Objects to add to this Group; or the `config` argument.
 * @param {Phaser.Types.GameObjects.Group.GroupConfig|Phaser.Types.GameObjects.Group.GroupCreateConfig} [config] - A Group Configuration object.
 *
 * @return {Phaser.GameObjects.Group} The Game Object that was created.
 */
GameObjectFactory.register('group', function (children, config) {
    return this.updateList.add(new Group(this.scene, children, config));
});
