
var renderWebGL = require('../../utils/NOOP');
var renderCanvas = require('../../utils/NOOP');

if (typeof WEBGL_RENDERER) {
    renderWebGL = require('./Layer3DWebGLRenderer');
}

if (typeof CANVAS_RENDERER) {
    renderCanvas = require('./Layer3DCanvasRenderer');
}

module.exports = {

    renderWebGL: renderWebGL,
    renderCanvas: renderCanvas

};
