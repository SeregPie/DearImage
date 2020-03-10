export default function(value) {
	let {HTMLCanvasElement} = globalThis;
	return !!HTMLCanvasElement && value instanceof HTMLCanvasElement;
}
