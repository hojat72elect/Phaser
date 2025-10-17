var RETRO_FONT_CONST = require('./const');
var Extend = require('../../utils/object/Extend');

/**
 * @namespace Phaser.GameObjects.RetroFont
 * 
 */

var RetroFont = {Parse: require('./ParseRetroFont')};

//   Merge in the consts
RetroFont = Extend(false, RetroFont, RETRO_FONT_CONST);

module.exports = RetroFont;
