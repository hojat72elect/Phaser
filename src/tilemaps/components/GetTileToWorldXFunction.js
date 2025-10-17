var CONST = require('../const/ORIENTATION_CONST');
var NOOP = require('../../utils/NOOP');
var TileToWorldX = require('./TileToWorldX');

/**
 * Gets the correct function to use to translate tiles, based on the map orientation.
 *
 * @function Phaser.Tilemaps.Components.GetTileToWorldXFunction
 * 
 *
 * @param {number} orientation - The Tilemap orientation constant.
 *
 * @return {function} The function to use to translate tiles for the given map type.
 */
var GetTileToWorldXFunction = function (orientation) {
    if (orientation === CONST.ORTHOGONAL) {
        return TileToWorldX;
    } else {
        return NOOP;
    }
};

module.exports = GetTileToWorldXFunction;
