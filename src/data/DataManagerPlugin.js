var Class = require('../utils/Class');
var DataManager = require('./DataManager');
var PluginCache = require('../plugins/PluginCache');
var SceneEvents = require('../scene/events');

/**
 * @classdesc
 * The Data Component features a means to store pieces of data specific to a Game Object, System or Plugin.
 * You can then search, query it, and retrieve the data. The parent must either extend EventEmitter,
 * or have a property called `events` that is an instance of it.
 *
 * @class DataManagerPlugin
 * @extends Phaser.Data.DataManager
 * @memberof Phaser.Data
 * @constructor
 * 
 *
 * @param {Phaser.Scene} scene - A reference to the Scene that this DataManager belongs to.
 */
var DataManagerPlugin = new Class({

    Extends: DataManager,

    initialize:

        function DataManagerPlugin(scene) {
            DataManager.call(this, scene, scene.sys.events);

            /**
             * A reference to the Scene that this DataManager belongs to.
             *
             * @name Phaser.Data.DataManagerPlugin#scene
             * @type {Phaser.Scene}
             * 
             */
            this.scene = scene;

            /**
             * A reference to the Scene's Systems.
             *
             * @name Phaser.Data.DataManagerPlugin#systems
             * @type {Phaser.Scenes.Systems}
             * 
             */
            this.systems = scene.sys;

            scene.sys.events.once(SceneEvents.BOOT, this.boot, this);
            scene.sys.events.on(SceneEvents.START, this.start, this);
        },

    /**
     * This method is called automatically, only once, when the Scene is first created.
     * Do not invoke it directly.
     *
     * @method Phaser.Data.DataManagerPlugin#boot
     * @private
     * 
     */
    boot: function () {
        this.events = this.systems.events;

        this.events.once(SceneEvents.DESTROY, this.destroy, this);
    },

    /**
     * This method is called automatically by the Scene when it is starting up.
     * It is responsible for creating local systems, properties and listening for Scene events.
     * Do not invoke it directly.
     *
     * @method Phaser.Data.DataManagerPlugin#start
     * @private
     * 
     */
    start: function () {
        this.events.once(SceneEvents.SHUTDOWN, this.shutdown, this);
    },

    /**
     * The Scene that owns this plugin is shutting down.
     * We need to kill and reset all internal properties as well as stop listening to Scene events.
     *
     * @method Phaser.Data.DataManagerPlugin#shutdown
     * @private
     * 
     */
    shutdown: function () {
        this.systems.events.off(SceneEvents.SHUTDOWN, this.shutdown, this);
    },

    /**
     * The Scene that owns this plugin is being destroyed.
     * We need to shutdown and then kill off all external references.
     *
     * @method Phaser.Data.DataManagerPlugin#destroy
     * 
     */
    destroy: function () {
        DataManager.prototype.destroy.call(this);

        this.events.off(SceneEvents.START, this.start, this);

        this.scene = null;
        this.systems = null;
    }

});

PluginCache.register('DataManagerPlugin', DataManagerPlugin, 'data');

module.exports = DataManagerPlugin;
