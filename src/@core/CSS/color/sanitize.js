import CanvasRenderingContext2D_create from '../../CanvasRenderingContext2D/create';

export default function(string) {
	let context = CanvasRenderingContext2D_create(0, 0);
	let gradient = context.createLinearGradient(0, 0, 0, 0);
	context.fillStyle = gradient;
	context.fillStyle = string;
	if (context.fillStyle !== gradient) {
		return context.fillStyle;
	}
}