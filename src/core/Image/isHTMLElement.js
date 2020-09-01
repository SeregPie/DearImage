export default function(value) {
	let {HTMLImageElement} = globalThis;
	return !!HTMLImageElement && value instanceof HTMLImageElement;
}
