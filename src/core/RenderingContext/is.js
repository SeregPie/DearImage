import RenderingContext_is2D from './is2D';
import RenderingContext_isImageBitmap from './isImageBitmap';
import RenderingContext_isNode from './isNode';
import RenderingContext_isWebGL from './isWebGL';
import RenderingContext_isWebGL2 from './isWebGL2';

export default function(value) {
	return (
		RenderingContext_is2D(value)
		||
		RenderingContext_isWebGL(value)
		||
		RenderingContext_isWebGL2(value)
		||
		RenderingContext_isImageBitmap(value)
		||
		RenderingContext_isNode(value)
	);
}
