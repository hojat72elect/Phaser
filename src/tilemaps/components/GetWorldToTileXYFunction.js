var CONST = require('../const/ORIENTATION_CONST');
var HexagonalWorldToTileXY = require('./HexagonalWorldToTileXY');
var IsometricWorldToTileXY = require('./IsometricWorldToTileXY');
var NOOP = require('../../utils/NOOP');
var StaggeredWorldToTileXY = require('./StaggeredWorldToTileXY');
var WorldToTileXY = require('./WorldToTileXY');

/**
 * Gets the correct function to use to translate tiles, based on the map orientation.
 *
 * @function Phaser.Tilemaps.Components.GetWorldToTileXYFunction
 * 
 *
 * @param {number} orientation - The Tilemap orientation constant.
 *
 * @return {function} The function to use to translate tiles for the given map type.
 */
var GetWorldToTileXYFunction = function (orientation) {
    if (orientation === CONST.ORTHOGONAL) {
        return WorldToTileXY;
    } else if (orientation === CONST.ISOMETRIC) {
        return IsometricWorldToTileXY;
    } else if (orientation === CONST.HEXAGONAL) {
        return HexagonalWorldToTileXY;
    } else if (orientation === CONST.STAGGERED) {
        return StaggeredWorldToTileXY;
    } else {
        return NOOP;
    }
};

module.exports = GetWorldToTileXYFunction;
