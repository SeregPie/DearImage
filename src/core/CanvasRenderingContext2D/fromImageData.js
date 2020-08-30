import CanvasRenderingContext2D_create from './create';

export default function(data) {
	let {
		height,
		width,
	} = data;
	let context = CanvasRenderingContext2D_create(width, height);
	if (width && height) {
		context.putImageData(data, 0, 0);
	}
	return context;
}
