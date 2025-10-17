/**
 * Internal function to process the separation of a physics body from a tile.
 *
 * @function Phaser.Physics.Arcade.Tilemap.ProcessTileSeparationY
 * 
 *
 * @param {Phaser.Physics.Arcade.Body} body - The Body object to separate.
 * @param {number} y - The y separation amount.
 */
var ProcessTileSeparationY = function (body, y) {
    if (y < 0) {
        body.blocked.none = false;
        body.blocked.up = true;
    } else if (y > 0) {
        body.blocked.none = false;
        body.blocked.down = true;
    }

    body.position.y -= y;
    body.updateCenter();

    if (body.bounce.y === 0) {
        body.velocity.y = 0;
    } else {
        body.velocity.y = -body.velocity.y * body.bounce.y;
    }
};

module.exports = ProcessTileSeparationY;
