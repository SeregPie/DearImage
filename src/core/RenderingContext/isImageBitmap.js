export default function(value) {
	let {ImageBitmapRenderingContext} = globalThis;
	return !!ImageBitmapRenderingContext && value instanceof ImageBitmapRenderingContext;
}
