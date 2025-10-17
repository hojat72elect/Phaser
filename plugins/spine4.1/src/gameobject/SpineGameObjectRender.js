

var renderWebGL = require('../../../../src/utils/NOOP');
var renderCanvas = require('../../../../src/utils/NOOP');
var renderDirect = require('../../../../src/utils/NOOP');

if (typeof WEBGL_RENDERER) {
    renderWebGL = require('./SpineGameObjectWebGLRenderer');
    renderDirect = require('./SpineGameObjectWebGLDirect');
}

if (typeof CANVAS_RENDERER) {
    renderCanvas = require('./SpineGameObjectCanvasRenderer');
}

module.exports = {

    renderWebGL: renderWebGL,
    renderCanvas: renderCanvas,
    renderDirect: renderDirect

};
