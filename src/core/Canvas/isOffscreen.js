export default function(value) {
	let {OffscreenCanvas} = globalThis;
	return !!OffscreenCanvas && value instanceof OffscreenCanvas;
}
