import CanvasRenderingContext2D_create from './create';

export default function(source, width, height) {
	let context = CanvasRenderingContext2D_create(width, height);
	if (width && height) {
		context.drawImage(source, 0, 0);
	}
	return context;
}
