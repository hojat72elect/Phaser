
var Class = require('../../../src/utils/Class');
var OrthographicCamera = require('./OrthographicCamera');
var PerspectiveCamera = require('./PerspectiveCamera');
var PluginCache = require('../../../src/plugins/PluginCache');

/**
 * @classdesc
 * [description]
 *
 * @class CameraManager
 * @memberOf Phaser.Cameras.Sprite3D
 * @constructor
 * 
 *
 * @param {Phaser.Scene} scene - [description]
 */
var CameraManager = new Class({

    initialize:

        function CameraManager(scene) {
            /**
             * [description]
             *
             * @name Phaser.Cameras.Sprite3D.CameraManager#scene
             * @type {Phaser.Scene}
             * 
             */
            this.scene = scene;

            /**
             * [description]
             *
             * @name Phaser.Cameras.Sprite3D.CameraManager#systems
             * @type {Phaser.Scenes.Systems}
             * 
             */
            this.systems = scene.sys;

            /**
             * An Array of the Camera objects being managed by this Camera Manager.
             *
             * @name Phaser.Cameras.Sprite3D.CameraManager#cameras
             * @type {Phaser.Cameras.Sprite3D.Camera[]}
             * 
             */
            this.cameras = [];

            scene.sys.events.once('boot', this.boot, this);
            scene.sys.events.on('start', this.start, this);
        },

    /**
     * This method is called automatically, only once, when the Scene is first created.
     * Do not invoke it directly.
     *
     * @method Phaser.Cameras.Scene3D.CameraManager#boot
     * @private
     * 
     */
    boot: function () {
        this.systems.events.once('destroy', this.destroy, this);
    },

    /**
     * This method is called automatically by the Scene when it is starting up.
     * It is responsible for creating local systems, properties and listening for Scene events.
     * Do not invoke it directly.
     *
     * @method Phaser.Cameras.Sprite3D.CameraManager#start
     * @private
     * 
     */
    start: function () {
        var eventEmitter = this.systems.events;

        eventEmitter.on('update', this.update, this);
        eventEmitter.once('shutdown', this.shutdown, this);
    },

    /**
     * [description]
     *
     * @method Phaser.Cameras.Sprite3D.CameraManager#add
     * 
     *
     * @param {number} [fieldOfView=80] - [description]
     * @param {number} [width] - [description]
     * @param {number} [height] - [description]
     *
     * @return {Phaser.Cameras.Sprite3D.PerspectiveCamera} [description]
     */
    add: function (fieldOfView, width, height) {
        return this.addPerspectiveCamera(fieldOfView, width, height);
    },

    /**
     * [description]
     *
     * @method Phaser.Cameras.Sprite3D.CameraManager#addOrthographicCamera
     * 
     *
     * @param {number} width - [description]
     * @param {number} height - [description]
     *
     * @return {Phaser.Cameras.Sprite3D.OrthographicCamera} [description]
     */
    addOrthographicCamera: function (width, height) {
        var config = this.scene.sys.game.config;

        if (width === undefined) {
            width = config.width;
        }
        if (height === undefined) {
            height = config.height;
        }

        var camera = new OrthographicCamera(this.scene, width, height);

        this.cameras.push(camera);

        return camera;
    },

    /**
     * [description]
     *
     * @method Phaser.Cameras.Sprite3D.CameraManager#addPerspectiveCamera
     * 
     *
     * @param {number} [fieldOfView=80] - [description]
     * @param {number} [width] - [description]
     * @param {number} [height] - [description]
     *
     * @return {Phaser.Cameras.Sprite3D.PerspectiveCamera} [description]
     */
    addPerspectiveCamera: function (fieldOfView, width, height) {
        var config = this.scene.sys.game.config;

        if (fieldOfView === undefined) {
            fieldOfView = 80;
        }
        if (width === undefined) {
            width = config.width;
        }
        if (height === undefined) {
            height = config.height;
        }

        var camera = new PerspectiveCamera(this.scene, fieldOfView, width, height);

        this.cameras.push(camera);

        return camera;
    },

    /**
     * [description]
     *
     * @method Phaser.Cameras.Sprite3D.CameraManager#getCamera
     * 
     *
     * @param {string} name - [description]
     *
     * @return {(Phaser.Cameras.Sprite3D.OrthographicCamera|Phaser.Cameras.Sprite3D.PerspectiveCamera)} [description]
     */
    getCamera: function (name) {
        for (var i = 0; i < this.cameras.length; i++) {
            if (this.cameras[i].name === name) {
                return this.cameras[i];
            }
        }

        return null;
    },

    /**
     * [description]
     *
     * @method Phaser.Cameras.Sprite3D.CameraManager#removeCamera
     * 
     *
     * @param {(Phaser.Cameras.Sprite3D.OrthographicCamera|Phaser.Cameras.Sprite3D.PerspectiveCamera)} camera - [description]
     */
    removeCamera: function (camera) {
        var cameraIndex = this.cameras.indexOf(camera);

        if (cameraIndex !== -1) {
            this.cameras.splice(cameraIndex, 1);
        }
    },

    /**
     * [description]
     *
     * @method Phaser.Cameras.Sprite3D.CameraManager#removeAll
     * 
     *
     * @return {(Phaser.Cameras.Sprite3D.OrthographicCamera|Phaser.Cameras.Sprite3D.PerspectiveCamera)} [description]
     */
    removeAll: function () {
        while (this.cameras.length > 0) {
            var camera = this.cameras.pop();

            camera.destroy();
        }

        return this.main;
    },

    /**
     * [description]
     *
     * @method Phaser.Cameras.Sprite3D.CameraManager#update
     * 
     *
     * @param {number} timestep - [description]
     * @param {number} delta - [description]
     */
    update: function (timestep, delta) {
        for (var i = 0, l = this.cameras.length; i < l; ++i) {
            this.cameras[i].update(timestep, delta);
        }
    },

    /**
     * The Scene that owns this plugin is shutting down.
     * We need to kill and reset all internal properties as well as stop listening to Scene events.
     *
     * @method Phaser.Cameras.Sprite3D.CameraManager#shutdown
     * @private
     * 
     */
    shutdown: function () {
        var eventEmitter = this.systems.events;

        eventEmitter.off('update', this.update, this);
        eventEmitter.off('shutdown', this.shutdown, this);

        this.removeAll();
    },

    /**
     * The Scene that owns this plugin is being destroyed.
     * We need to shutdown and then kill off all external references.
     *
     * @method Phaser.Cameras.Sprite3D.CameraManager#destroy
     * @private
     * 
     */
    destroy: function () {
        this.shutdown();

        this.scene.sys.events.off('start', this.start, this);

        this.scene = null;
        this.systems = null;
    }

});

PluginCache.register('CameraManager3D', CameraManager, 'cameras3d');

module.exports = CameraManager;
