import isCanvasRenderingContext2D from './isCanvasRenderingContext2D';
import isImageBitmapRenderingContext from './isImageBitmapRenderingContext';
import isOffscreenCanvasRenderingContext2D from './isOffscreenCanvasRenderingContext2D';
import isWebGL2RenderingContext from './isWebGL2RenderingContext';
import isWebGLRenderingContext from './isWebGLRenderingContext';

export default function(value) {
	return (
		isCanvasRenderingContext2D(value)
		||
		isWebGL2RenderingContext(value)
		||
		isWebGLRenderingContext(value)
		||
		isImageBitmapRenderingContext(value)
		||
		isOffscreenCanvasRenderingContext2D(value)
	);
}
