var Class = require('../utils/Class');
var EE = require('eventemitter3');
var PluginCache = require('../plugins/PluginCache');

/**
 * @classdesc
 * EventEmitter is a Scene Systems plugin compatible version of eventemitter3.
 *
 * @class EventEmitter
 * @memberof Phaser.Events
 * @constructor
 * 
 */
var EventEmitter = new Class({

    Extends: EE,

    initialize:

        function EventEmitter() {
            EE.call(this);
        },

    /**
     * Removes all listeners.
     *
     * @method Phaser.Events.EventEmitter#shutdown
     * 
     */
    shutdown: function () {
        this.removeAllListeners();
    },

    /**
     * Removes all listeners.
     *
     * @method Phaser.Events.EventEmitter#destroy
     * 
     */
    destroy: function () {
        this.removeAllListeners();
    }

});

/**
 * Return an array listing the events for which the emitter has registered listeners.
 *
 * @method Phaser.Events.EventEmitter#eventNames
 * 
 *
 * @return {Array.<string|symbol>}
 */

/**
 * Return the listeners registered for a given event.
 *
 * @method Phaser.Events.EventEmitter#listeners
 * 
 *
 * @param {(string|symbol)} event - The event name.
 *
 * @return {Function[]} The registered listeners.
 */

/**
 * Return the number of listeners listening to a given event.
 *
 * @method Phaser.Events.EventEmitter#listenerCount
 * 
 *
 * @param {(string|symbol)} event - The event name.
 *
 * @return {number} The number of listeners.
 */

/**
 * Calls each of the listeners registered for a given event.
 *
 * @method Phaser.Events.EventEmitter#emit
 * 
 *
 * @param {(string|symbol)} event - The event name.
 * @param {...*} [args] - Additional arguments that will be passed to the event handler.
 *
 * @return {boolean} `true` if the event had listeners, else `false`.
 */

/**
 * Add a listener for a given event.
 *
 * @method Phaser.Events.EventEmitter#on
 * 
 *
 * @param {(string|symbol)} event - The event name.
 * @param {function} fn - The listener function.
 * @param {*} [context=this] - The context to invoke the listener with.
 *
 * @return {this} `this`.
 */

/**
 * Add a listener for a given event.
 *
 * @method Phaser.Events.EventEmitter#addListener
 * 
 *
 * @param {(string|symbol)} event - The event name.
 * @param {function} fn - The listener function.
 * @param {*} [context=this] - The context to invoke the listener with.
 *
 * @return {this} `this`.
 */

/**
 * Add a one-time listener for a given event.
 *
 * @method Phaser.Events.EventEmitter#once
 * 
 *
 * @param {(string|symbol)} event - The event name.
 * @param {function} fn - The listener function.
 * @param {*} [context=this] - The context to invoke the listener with.
 *
 * @return {this} `this`.
 */

/**
 * Remove the listeners of a given event.
 *
 * @method Phaser.Events.EventEmitter#removeListener
 * 
 *
 * @param {(string|symbol)} event - The event name.
 * @param {function} [fn] - Only remove the listeners that match this function.
 * @param {*} [context] - Only remove the listeners that have this context.
 * @param {boolean} [once] - Only remove one-time listeners.
 *
 * @return {this} `this`.
 */

/**
 * Remove the listeners of a given event.
 *
 * @method Phaser.Events.EventEmitter#off
 * 
 *
 * @param {(string|symbol)} event - The event name.
 * @param {function} [fn] - Only remove the listeners that match this function.
 * @param {*} [context] - Only remove the listeners that have this context.
 * @param {boolean} [once] - Only remove one-time listeners.
 *
 * @return {this} `this`.
 */

/**
 * Remove all listeners, or those of the specified event.
 *
 * @method Phaser.Events.EventEmitter#removeAllListeners
 * 
 *
 * @param {(string|symbol)} [event] - The event name.
 *
 * @return {this} `this`.
 */

PluginCache.register('EventEmitter', EventEmitter, 'events');

module.exports = EventEmitter;
