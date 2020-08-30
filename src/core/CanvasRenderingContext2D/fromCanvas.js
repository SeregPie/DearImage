import CanvasRenderingContext2D_fromCanvasImageSource from './fromCanvasImageSource';

export default function(canvas) {
	return CanvasRenderingContext2D_fromCanvasImageSource(canvas, canvas.width, canvas.height);
}
