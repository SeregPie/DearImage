import CanvasRenderingContext2D_create from '../CanvasRenderingContext2D/create';

export default function(...args) {
	let context = CanvasRenderingContext2D_create(0, 0);
	return context.createPattern(...args);
}
