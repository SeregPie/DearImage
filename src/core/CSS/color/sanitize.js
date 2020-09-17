import CanvasRenderingContext2D_create from '../../CanvasRenderingContext2D/create';

export default function(value) {
	let context = CanvasRenderingContext2D_create(0, 0);
	let gradient = context.createLinearGradient(0, 0, 0, 0);
	context.fillStyle = gradient;
	context.fillStyle = value;
	if (context.fillStyle !== gradient) {
		return context.fillStyle;
	}
}