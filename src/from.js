import PaperDuck from './PaperDuck';
import PaperDuck_fromImageSource from './fromImageSource';

export default function(value) {
	if (
		value instanceof PaperDuck
		||
		value instanceof CanvasRenderingContext2D
		||
		value instanceof WebGLRenderingContext
		||
		value instanceof WebGL2RenderingContext
	) {
		return PaperDuck_fromImageSource(value.canvas);
	}
	return PaperDuck_fromImageSource(value);
}
