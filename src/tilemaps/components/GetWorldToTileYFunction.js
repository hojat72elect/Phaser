var CONST = require('../const/ORIENTATION_CONST');
var NULL = require('../../utils/NULL');
var StaggeredWorldToTileY = require('./StaggeredWorldToTileY');
var WorldToTileY = require('./WorldToTileY');

/**
 * Gets the correct function to use to translate tiles, based on the map orientation.
 *
 * @function Phaser.Tilemaps.Components.GetWorldToTileYFunction
 * 
 *
 * @param {number} orientation - The Tilemap orientation constant.
 *
 * @return {function} The function to use to translate tiles for the given map type.
 */
var GetWorldToTileYFunction = function (orientation) {
    if (orientation === CONST.ORTHOGONAL) {
        return WorldToTileY;
    } else if (orientation === CONST.STAGGERED) {
        return StaggeredWorldToTileY;
    } else {
        return NULL;
    }
};

module.exports = GetWorldToTileYFunction;
