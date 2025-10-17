/**
 * The WebGLPipeline After Flush Event.
 *
 * This event is dispatched by a WebGLPipeline right after it has issued a drawArrays command
 * and cleared its vertex count.
 *
 * @event Phaser.Renderer.WebGL.Pipelines.Events#AFTER_FLUSH
 * 
 *
 * @param {Phaser.Renderer.WebGL.WebGLPipeline} pipeline - The pipeline that has flushed.
 * @param {boolean} isPostFlush - Was this flush invoked as part of a post-process, or not?
 */
module.exports = 'pipelineafterflush';
