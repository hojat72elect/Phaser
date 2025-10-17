/**
 * @namespace Phaser.Physics.Arcade.Tilemap
 */

var Tilemap = {

    ProcessTileCallbacks: require('./ProcessTileCallbacks'),
    ProcessTileSeparationX: require('./ProcessTileSeparationX'),
    ProcessTileSeparationY: require('./ProcessTileSeparationY'),
    SeparateTile: require('./SeparateTile'),
    TileCheckX: require('./TileCheckX'),
    TileCheckY: require('./TileCheckY'),
    TileIntersectsBody: require('./TileIntersectsBody')

};

module.exports = Tilemap;
