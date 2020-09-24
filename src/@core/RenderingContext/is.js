import CanvasRenderingContext2D_is from '../CanvasRenderingContext2D/is';
import ImageBitmapRenderingContext_is from '../ImageBitmapRenderingContext/is';
import WebGL2RenderingContext_is from '../WebGL2RenderingContext/is';
import WebGLRenderingContext_is from '../WebGLRenderingContext/is';

export default function(value) {
	return (
		CanvasRenderingContext2D_is(value)
		||
		WebGL2RenderingContext_is(value)
		||
		WebGLRenderingContext_is(value)
		||
		ImageBitmapRenderingContext_is(value)
	);
}
