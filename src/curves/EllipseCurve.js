//  Based on the three.js Curve classes created by [zz85](http://www.lab4games.net/zz85/blog)

var Class = require('../utils/Class');
var Curve = require('./Curve');
var DegToRad = require('../math/DegToRad');
var GetValue = require('../utils/object/GetValue');
var RadToDeg = require('../math/RadToDeg');
var Vector2 = require('../math/Vector2');

/**
 * @classdesc
 * An Elliptical Curve derived from the Base Curve class.
 *
 * See https://en.wikipedia.org/wiki/Elliptic_curve for more details.
 *
 * @class Ellipse
 * @extends Phaser.Curves.Curve
 * @memberof Phaser.Curves
 * @constructor
 * 
 *
 * @param {(number|Phaser.Types.Curves.EllipseCurveConfig)} [x=0] - The x coordinate of the ellipse, or an Ellipse Curve configuration object.
 * @param {number} [y=0] - The y coordinate of the ellipse.
 * @param {number} [xRadius=0] - The horizontal radius of ellipse.
 * @param {number} [yRadius=0] - The vertical radius of ellipse.
 * @param {number} [startAngle=0] - The start angle of the ellipse, in degrees.
 * @param {number} [endAngle=360] - The end angle of the ellipse, in degrees.
 * @param {boolean} [clockwise=false] - Whether the ellipse angles are given as clockwise (`true`) or counter-clockwise (`false`).
 * @param {number} [rotation=0] - The rotation of the ellipse, in degrees.
 */
var EllipseCurve = new Class({

    Extends: Curve,

    initialize:

        function EllipseCurve(x, y, xRadius, yRadius, startAngle, endAngle, clockwise, rotation) {
            if (typeof x === 'object') {
                var config = x;

                x = GetValue(config, 'x', 0);
                y = GetValue(config, 'y', 0);
                xRadius = GetValue(config, 'xRadius', 0);
                yRadius = GetValue(config, 'yRadius', xRadius);
                startAngle = GetValue(config, 'startAngle', 0);
                endAngle = GetValue(config, 'endAngle', 360);
                clockwise = GetValue(config, 'clockwise', false);
                rotation = GetValue(config, 'rotation', 0);
            } else {
                if (yRadius === undefined) {
                    yRadius = xRadius;
                }
                if (startAngle === undefined) {
                    startAngle = 0;
                }
                if (endAngle === undefined) {
                    endAngle = 360;
                }
                if (clockwise === undefined) {
                    clockwise = false;
                }
                if (rotation === undefined) {
                    rotation = 0;
                }
            }

            Curve.call(this, 'EllipseCurve');

            //  Center point

            /**
             * The center point of the ellipse. Used for calculating rotation.
             *
             * @name Phaser.Curves.Ellipse#p0
             * @type {Phaser.Math.Vector2}
             * 
             */
            this.p0 = new Vector2(x, y);

            /**
             * The horizontal radius of the ellipse.
             *
             * @name Phaser.Curves.Ellipse#_xRadius
             * @type {number}
             * @private
             * 
             */
            this._xRadius = xRadius;

            /**
             * The vertical radius of the ellipse.
             *
             * @name Phaser.Curves.Ellipse#_yRadius
             * @type {number}
             * @private
             * 
             */
            this._yRadius = yRadius;

            //  Radians

            /**
             * The starting angle of the ellipse in radians.
             *
             * @name Phaser.Curves.Ellipse#_startAngle
             * @type {number}
             * @private
             * 
             */
            this._startAngle = DegToRad(startAngle);

            /**
             * The end angle of the ellipse in radians.
             *
             * @name Phaser.Curves.Ellipse#_endAngle
             * @type {number}
             * @private
             * 
             */
            this._endAngle = DegToRad(endAngle);

            /**
             * Anti-clockwise direction.
             *
             * @name Phaser.Curves.Ellipse#_clockwise
             * @type {boolean}
             * @private
             * 
             */
            this._clockwise = clockwise;

            /**
             * The rotation of the arc.
             *
             * @name Phaser.Curves.Ellipse#_rotation
             * @type {number}
             * @private
             * 
             */
            this._rotation = DegToRad(rotation);
        },

    /**
     * Gets the starting point on the curve.
     *
     * @method Phaser.Curves.Ellipse#getStartPoint
     * 
     *
     * @generic {Phaser.Math.Vector2} O - [out,$return]
     *
     * @param {Phaser.Math.Vector2} [out] - A Vector2 object to store the result in. If not given will be created.
     *
     * @return {Phaser.Math.Vector2} The coordinates of the point on the curve. If an `out` object was given this will be returned.
     */
    getStartPoint: function (out) {
        if (out === undefined) {
            out = new Vector2();
        }

        return this.getPoint(0, out);
    },

    /**
     * Get the resolution of the curve.
     *
     * @method Phaser.Curves.Ellipse#getResolution
     * 
     *
     * @param {number} divisions - Optional divisions value.
     *
     * @return {number} The curve resolution.
     */
    getResolution: function (divisions) {
        return divisions * 2;
    },

    /**
     * Get point at relative position in curve according to length.
     *
     * @method Phaser.Curves.Ellipse#getPoint
     * 
     *
     * @generic {Phaser.Math.Vector2} O - [out,$return]
     *
     * @param {number} t - The position along the curve to return. Where 0 is the start and 1 is the end.
     * @param {Phaser.Math.Vector2} [out] - A Vector2 object to store the result in. If not given will be created.
     *
     * @return {Phaser.Math.Vector2} The coordinates of the point on the curve. If an `out` object was given this will be returned.
     */
    getPoint: function (t, out) {
        if (out === undefined) {
            out = new Vector2();
        }

        var twoPi = Math.PI * 2;
        var deltaAngle = this._endAngle - this._startAngle;
        var samePoints = Math.abs(deltaAngle) < Number.EPSILON;

        // ensures that deltaAngle is 0 .. 2 PI
        while (deltaAngle < 0) {
            deltaAngle += twoPi;
        }

        while (deltaAngle > twoPi) {
            deltaAngle -= twoPi;
        }

        if (deltaAngle < Number.EPSILON) {
            if (samePoints) {
                deltaAngle = 0;
            } else {
                deltaAngle = twoPi;
            }
        }

        if (this._clockwise && !samePoints) {
            if (deltaAngle === twoPi) {
                deltaAngle = -twoPi;
            } else {
                deltaAngle = deltaAngle - twoPi;
            }
        }

        var angle = this._startAngle + t * deltaAngle;
        var x = this.p0.x + this._xRadius * Math.cos(angle);
        var y = this.p0.y + this._yRadius * Math.sin(angle);

        if (this._rotation !== 0) {
            var cos = Math.cos(this._rotation);
            var sin = Math.sin(this._rotation);

            var tx = x - this.p0.x;
            var ty = y - this.p0.y;

            // Rotate the point about the center of the ellipse.
            x = tx * cos - ty * sin + this.p0.x;
            y = tx * sin + ty * cos + this.p0.y;
        }

        return out.set(x, y);
    },

    /**
     * Sets the horizontal radius of this curve.
     *
     * @method Phaser.Curves.Ellipse#setXRadius
     * 
     *
     * @param {number} value - The horizontal radius of this curve.
     *
     * @return {this} This curve object.
     */
    setXRadius: function (value) {
        this.xRadius = value;

        return this;
    },

    /**
     * Sets the vertical radius of this curve.
     *
     * @method Phaser.Curves.Ellipse#setYRadius
     * 
     *
     * @param {number} value - The vertical radius of this curve.
     *
     * @return {this} This curve object.
     */
    setYRadius: function (value) {
        this.yRadius = value;

        return this;
    },

    /**
     * Sets the width of this curve.
     *
     * @method Phaser.Curves.Ellipse#setWidth
     * 
     *
     * @param {number} value - The width of this curve.
     *
     * @return {this} This curve object.
     */
    setWidth: function (value) {
        this.xRadius = value / 2;

        return this;
    },

    /**
     * Sets the height of this curve.
     *
     * @method Phaser.Curves.Ellipse#setHeight
     * 
     *
     * @param {number} value - The height of this curve.
     *
     * @return {this} This curve object.
     */
    setHeight: function (value) {
        this.yRadius = value / 2;

        return this;
    },

    /**
     * Sets the start angle of this curve.
     *
     * @method Phaser.Curves.Ellipse#setStartAngle
     * 
     *
     * @param {number} value - The start angle of this curve, in radians.
     *
     * @return {this} This curve object.
     */
    setStartAngle: function (value) {
        this.startAngle = value;

        return this;
    },

    /**
     * Sets the end angle of this curve.
     *
     * @method Phaser.Curves.Ellipse#setEndAngle
     * 
     *
     * @param {number} value - The end angle of this curve, in radians.
     *
     * @return {this} This curve object.
     */
    setEndAngle: function (value) {
        this.endAngle = value;

        return this;
    },

    /**
     * Sets if this curve extends clockwise or anti-clockwise.
     *
     * @method Phaser.Curves.Ellipse#setClockwise
     * 
     *
     * @param {boolean} value - The clockwise state of this curve.
     *
     * @return {this} This curve object.
     */
    setClockwise: function (value) {
        this.clockwise = value;

        return this;
    },

    /**
     * Sets the rotation of this curve.
     *
     * @method Phaser.Curves.Ellipse#setRotation
     * 
     *
     * @param {number} value - The rotation of this curve, in radians.
     *
     * @return {this} This curve object.
     */
    setRotation: function (value) {
        this.rotation = value;

        return this;
    },

    /**
     * The x coordinate of the center of the ellipse.
     *
     * @name Phaser.Curves.Ellipse#x
     * @type {number}
     * 
     */
    x: {

        get: function () {
            return this.p0.x;
        },

        set: function (value) {
            this.p0.x = value;
        }

    },

    /**
     * The y coordinate of the center of the ellipse.
     *
     * @name Phaser.Curves.Ellipse#y
     * @type {number}
     * 
     */
    y: {

        get: function () {
            return this.p0.y;
        },

        set: function (value) {
            this.p0.y = value;
        }

    },

    /**
     * The horizontal radius of the ellipse.
     *
     * @name Phaser.Curves.Ellipse#xRadius
     * @type {number}
     * 
     */
    xRadius: {

        get: function () {
            return this._xRadius;
        },

        set: function (value) {
            this._xRadius = value;
        }

    },

    /**
     * The vertical radius of the ellipse.
     *
     * @name Phaser.Curves.Ellipse#yRadius
     * @type {number}
     * 
     */
    yRadius: {

        get: function () {
            return this._yRadius;
        },

        set: function (value) {
            this._yRadius = value;
        }

    },

    /**
     * The start angle of the ellipse in degrees.
     *
     * @name Phaser.Curves.Ellipse#startAngle
     * @type {number}
     * 
     */
    startAngle: {

        get: function () {
            return RadToDeg(this._startAngle);
        },

        set: function (value) {
            this._startAngle = DegToRad(value);
        }

    },

    /**
     * The end angle of the ellipse in degrees.
     *
     * @name Phaser.Curves.Ellipse#endAngle
     * @type {number}
     * 
     */
    endAngle: {

        get: function () {
            return RadToDeg(this._endAngle);
        },

        set: function (value) {
            this._endAngle = DegToRad(value);
        }

    },

    /**
     * `true` if the ellipse rotation is clockwise or `false` if anti-clockwise.
     *
     * @name Phaser.Curves.Ellipse#clockwise
     * @type {boolean}
     * 
     */
    clockwise: {

        get: function () {
            return this._clockwise;
        },

        set: function (value) {
            this._clockwise = value;
        }

    },

    /**
     * The rotation of the ellipse, relative to the center, in degrees.
     *
     * @name Phaser.Curves.Ellipse#angle
     * @type {number}
     * @since 3.14.0
     */
    angle: {

        get: function () {
            return RadToDeg(this._rotation);
        },

        set: function (value) {
            this._rotation = DegToRad(value);
        }

    },

    /**
     * The rotation of the ellipse, relative to the center, in radians.
     *
     * @name Phaser.Curves.Ellipse#rotation
     * @type {number}
     * 
     */
    rotation: {

        get: function () {
            return this._rotation;
        },

        set: function (value) {
            this._rotation = value;
        }

    },

    /**
     * JSON serialization of the curve.
     *
     * @method Phaser.Curves.Ellipse#toJSON
     * 
     *
     * @return {Phaser.Types.Curves.JSONEllipseCurve} The JSON object containing this curve data.
     */
    toJSON: function () {
        return {
            type: this.type,
            x: this.p0.x,
            y: this.p0.y,
            xRadius: this._xRadius,
            yRadius: this._yRadius,
            startAngle: RadToDeg(this._startAngle),
            endAngle: RadToDeg(this._endAngle),
            clockwise: this._clockwise,
            rotation: RadToDeg(this._rotation)
        };
    }

});

/**
 * Creates a curve from the provided Ellipse Curve Configuration object.
 *
 * @function Phaser.Curves.Ellipse.fromJSON
 * 
 *
 * @param {Phaser.Types.Curves.JSONEllipseCurve} data - The JSON object containing this curve data.
 *
 * @return {Phaser.Curves.Ellipse} The ellipse curve constructed from the configuration object.
 */
EllipseCurve.fromJSON = function (data) {
    return new EllipseCurve(data);
};

module.exports = EllipseCurve;
