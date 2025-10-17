var Class = require('../../utils/Class');
var Events = require('./events');

/**
 * @classdesc
 * Contains information about a specific button on a Gamepad.
 * Button objects are created automatically by the Gamepad as they are needed.
 *
 * @class Button
 * @memberof Phaser.Input.Gamepad
 * @constructor
 * 
 *
 * @param {Phaser.Input.Gamepad.Gamepad} pad - A reference to the Gamepad that this Button belongs to.
 * @param {number} index - The index of this Button.
 */
var Button = new Class({

    initialize:

        function Button(pad, index) {
            /**
             * A reference to the Gamepad that this Button belongs to.
             *
             * @name Phaser.Input.Gamepad.Button#pad
             * @type {Phaser.Input.Gamepad.Gamepad}
             * 
             */
            this.pad = pad;

            /**
             * An event emitter to use to emit the button events.
             *
             * @name Phaser.Input.Gamepad.Button#events
             * @type {Phaser.Events.EventEmitter}
             * 
             */
            this.events = pad.manager;

            /**
             * The index of this Button.
             *
             * @name Phaser.Input.Gamepad.Button#index
             * @type {number}
             * 
             */
            this.index = index;

            /**
             * Between 0 and 1.
             *
             * @name Phaser.Input.Gamepad.Button#value
             * @type {number}
             * @default 0
             * 
             */
            this.value = 0;

            /**
             * Can be set for analogue buttons to enable a 'pressure' threshold,
             * before a button is considered as being 'pressed'.
             *
             * @name Phaser.Input.Gamepad.Button#threshold
             * @type {number}
             * @default 1
             * 
             */
            this.threshold = 1;

            /**
             * Is the Button being pressed down or not?
             *
             * @name Phaser.Input.Gamepad.Button#pressed
             * @type {boolean}
             * @default false
             * 
             */
            this.pressed = false;
        },

    /**
     * Internal update handler for this Button.
     * Called automatically by the Gamepad as part of its update.
     *
     * @method Phaser.Input.Gamepad.Button#update
     * @fires Phaser.Input.Gamepad.Events#BUTTON_DOWN
     * @fires Phaser.Input.Gamepad.Events#BUTTON_UP
     * @fires Phaser.Input.Gamepad.Events#GAMEPAD_BUTTON_DOWN
     * @fires Phaser.Input.Gamepad.Events#GAMEPAD_BUTTON_UP
     * @private
     * 
     *
     * @param {number} value - The value of the button. Between 0 and 1.
     */
    update: function (value) {
        this.value = value;

        var pad = this.pad;
        var index = this.index;

        if (value >= this.threshold) {
            if (!this.pressed) {
                this.pressed = true;
                this.events.emit(Events.BUTTON_DOWN, pad, this, value);
                this.pad.emit(Events.GAMEPAD_BUTTON_DOWN, index, value, this);
            }
        } else if (this.pressed) {
            this.pressed = false;
            this.events.emit(Events.BUTTON_UP, pad, this, value);
            this.pad.emit(Events.GAMEPAD_BUTTON_UP, index, value, this);
        }
    },

    /**
     * Destroys this Button instance and releases external references it holds.
     *
     * @method Phaser.Input.Gamepad.Button#destroy
     * @since 3.10.0
     */
    destroy: function () {
        this.pad = null;
        this.events = null;
    }

});

module.exports = Button;
