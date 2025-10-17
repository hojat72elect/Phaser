var Class = require('../../utils/Class');
var InputEvents = require('../events');
var NOOP = require('../../utils/NOOP');

// https://developer.mozilla.org/en-US/docs/Web/API/Touch_events
// https://patrickhlauke.github.io/touch/tests/results/
// https://www.html5rocks.com/en/mobile/touch/

/**
 * @classdesc
 * The Touch Manager is a helper class that belongs to the Input Manager.
 *
 * Its role is to listen for native DOM Touch Events and then pass them onto the Input Manager for further processing.
 *
 * You do not need to create this class directly, the Input Manager will create an instance of it automatically.
 *
 * @class TouchManager
 * @memberof Phaser.Input.Touch
 * @constructor
 * 
 *
 * @param {Phaser.Input.InputManager} inputManager - A reference to the Input Manager.
 */
var TouchManager = new Class({

    initialize:

        function TouchManager(inputManager) {
            /**
             * A reference to the Input Manager.
             *
             * @name Phaser.Input.Touch.TouchManager#manager
             * @type {Phaser.Input.InputManager}
             * 
             */
            this.manager = inputManager;

            /**
             * If true the DOM events will have event.preventDefault applied to them, if false they will propagate fully.
             *
             * @name Phaser.Input.Touch.TouchManager#capture
             * @type {boolean}
             * @default true
             * 
             */
            this.capture = true;

            /**
             * A boolean that controls if the Touch Manager is enabled or not.
             * Can be toggled on the fly.
             *
             * @name Phaser.Input.Touch.TouchManager#enabled
             * @type {boolean}
             * @default false
             * 
             */
            this.enabled = false;

            /**
             * The Touch Event target, as defined in the Game Config.
             * Typically the canvas to which the game is rendering, but can be any interactive DOM element.
             *
             * @name Phaser.Input.Touch.TouchManager#target
             * @type {any}
             * 
             */
            this.target;

            /**
             * The Touch Start event handler function.
             * Initially empty and bound in the `startListeners` method.
             *
             * @name Phaser.Input.Touch.TouchManager#onTouchStart
             * @type {function}
             * 
             */
            this.onTouchStart = NOOP;

            /**
             * The Touch Start event handler function specifically for events on the Window.
             * Initially empty and bound in the `startListeners` method.
             *
             * @name Phaser.Input.Touch.TouchManager#onTouchStartWindow
             * @type {function}
             * 
             */
            this.onTouchStartWindow = NOOP;

            /**
             * The Touch Move event handler function.
             * Initially empty and bound in the `startListeners` method.
             *
             * @name Phaser.Input.Touch.TouchManager#onTouchMove
             * @type {function}
             * 
             */
            this.onTouchMove = NOOP;

            /**
             * The Touch End event handler function.
             * Initially empty and bound in the `startListeners` method.
             *
             * @name Phaser.Input.Touch.TouchManager#onTouchEnd
             * @type {function}
             * 
             */
            this.onTouchEnd = NOOP;

            /**
             * The Touch End event handler function specifically for events on the Window.
             * Initially empty and bound in the `startListeners` method.
             *
             * @name Phaser.Input.Touch.TouchManager#onTouchEndWindow
             * @type {function}
             * 
             */
            this.onTouchEndWindow = NOOP;

            /**
             * The Touch Cancel event handler function.
             * Initially empty and bound in the `startListeners` method.
             *
             * @name Phaser.Input.Touch.TouchManager#onTouchCancel
             * @type {function}
             * 
             */
            this.onTouchCancel = NOOP;

            /**
             * The Touch Cancel event handler function specifically for events on the Window.
             * Initially empty and bound in the `startListeners` method.
             *
             * @name Phaser.Input.Touch.TouchManager#onTouchCancelWindow
             * @type {function}
             * 
             */
            this.onTouchCancelWindow = NOOP;

            /**
             * Are the event listeners hooked into `window.top` or `window`?
             *
             * This is set during the `boot` sequence. If the browser does not have access to `window.top`,
             * such as in cross-origin iframe environments, this property gets set to `false` and the events
             * are hooked into `window` instead.
             *
             * @name Phaser.Input.Touch.TouchManager#isTop
             * @type {boolean}
             * @readonly
             * 
             */
            this.isTop = true;

            inputManager.events.once(InputEvents.MANAGER_BOOT, this.boot, this);
        },

    /**
     * The Touch Manager boot process.
     *
     * @method Phaser.Input.Touch.TouchManager#boot
     * @private
     * 
     */
    boot: function () {
        var config = this.manager.config;

        this.enabled = config.inputTouch;
        this.target = config.inputTouchEventTarget;
        this.capture = config.inputTouchCapture;

        if (!this.target) {
            this.target = this.manager.game.canvas;
        } else if (typeof this.target === 'string') {
            this.target = document.getElementById(this.target);
        }

        if (config.disableContextMenu) {
            this.disableContextMenu();
        }

        if (this.enabled && this.target) {
            this.startListeners();
        }
    },

    /**
     * Attempts to disable the context menu from appearing if you touch-hold on the browser.
     *
     * Works by listening for the `contextmenu` event and prevent defaulting it.
     *
     * Use this if you need to disable the OS context menu on mobile.
     *
     * @method Phaser.Input.Touch.TouchManager#disableContextMenu
     * @since 3.20.0
     *
     * @return {this} This Touch Manager instance.
     */
    disableContextMenu: function () {
        this.target.addEventListener('contextmenu', function (event) {
            event.preventDefault();
            return false;
        });

        return this;
    },

    /**
     * Starts the Touch Event listeners running as long as an input target is set.
     *
     * This method is called automatically if Touch Input is enabled in the game config,
     * which it is by default. However, you can call it manually should you need to
     * delay input capturing until later in the game.
     *
     * @method Phaser.Input.Touch.TouchManager#startListeners
     * 
     */
    startListeners: function () {
        var target = this.target;

        if (!target) {
            return;
        }

        var _this = this;
        var manager = this.manager;
        var canvas = manager.canvas;
        var autoFocus = (window && window.focus && manager.game.config.autoFocus);

        this.onTouchMove = function (event) {
            if (!event.defaultPrevented && _this.enabled && manager && manager.enabled) {
                manager.onTouchMove(event);

                if (_this.capture && event.cancelable) {
                    event.preventDefault();
                }
            }
        };

        this.onTouchStart = function (event) {
            if (autoFocus) {
                window.focus();
            }

            if (!event.defaultPrevented && _this.enabled && manager && manager.enabled) {
                manager.onTouchStart(event);

                if (_this.capture && event.cancelable && event.target === canvas) {
                    event.preventDefault();
                }
            }
        };

        this.onTouchStartWindow = function (event) {
            if (!event.defaultPrevented && _this.enabled && manager && manager.enabled && event.target !== canvas) {
                //  Only process the event if the target isn't the canvas
                manager.onTouchStart(event);
            }
        };

        this.onTouchEnd = function (event) {
            if (!event.defaultPrevented && _this.enabled && manager && manager.enabled) {
                manager.onTouchEnd(event);

                if (_this.capture && event.cancelable && event.target === canvas) {
                    event.preventDefault();
                }
            }
        };

        this.onTouchEndWindow = function (event) {
            if (!event.defaultPrevented && _this.enabled && manager && manager.enabled && event.target !== canvas) {
                //  Only process the event if the target isn't the canvas
                manager.onTouchEnd(event);
            }
        };

        this.onTouchCancel = function (event) {
            if (!event.defaultPrevented && _this.enabled && manager && manager.enabled) {
                manager.onTouchCancel(event);

                if (_this.capture) {
                    event.preventDefault();
                }
            }
        };

        this.onTouchCancelWindow = function (event) {
            if (!event.defaultPrevented && _this.enabled && manager && manager.enabled) {
                manager.onTouchCancel(event);
            }
        };

        var capture = this.capture;
        var passive = {passive: true};
        var nonPassive = {passive: false};

        target.addEventListener('touchstart', this.onTouchStart, (capture) ? nonPassive : passive);
        target.addEventListener('touchmove', this.onTouchMove, (capture) ? nonPassive : passive);
        target.addEventListener('touchend', this.onTouchEnd, (capture) ? nonPassive : passive);
        target.addEventListener('touchcancel', this.onTouchCancel, (capture) ? nonPassive : passive);

        if (window && manager.game.config.inputWindowEvents) {
            try {
                window.top.addEventListener('touchstart', this.onTouchStartWindow, nonPassive);
                window.top.addEventListener('touchend', this.onTouchEndWindow, nonPassive);
                window.top.addEventListener('touchcancel', this.onTouchCancelWindow, nonPassive);
            } catch (exception) {
                window.addEventListener('touchstart', this.onTouchStartWindow, nonPassive);
                window.addEventListener('touchend', this.onTouchEndWindow, nonPassive);
                window.addEventListener('touchcancel', this.onTouchCancelWindow, nonPassive);

                this.isTop = false;
            }
        }

        this.enabled = true;
    },

    /**
     * Stops the Touch Event listeners.
     * This is called automatically and does not need to be manually invoked.
     *
     * @method Phaser.Input.Touch.TouchManager#stopListeners
     * 
     */
    stopListeners: function () {
        var target = this.target;

        target.removeEventListener('touchstart', this.onTouchStart);
        target.removeEventListener('touchmove', this.onTouchMove);
        target.removeEventListener('touchend', this.onTouchEnd);
        target.removeEventListener('touchcancel', this.onTouchCancel);

        if (window) {
            target = (this.isTop) ? window.top : window;

            target.removeEventListener('touchstart', this.onTouchStartWindow);
            target.removeEventListener('touchend', this.onTouchEndWindow);
            target.removeEventListener('touchcancel', this.onTouchCancelWindow);
        }
    },

    /**
     * Destroys this Touch Manager instance.
     *
     * @method Phaser.Input.Touch.TouchManager#destroy
     * 
     */
    destroy: function () {
        this.stopListeners();

        this.target = null;
        this.enabled = false;
        this.manager = null;
    }

});

module.exports = TouchManager;
