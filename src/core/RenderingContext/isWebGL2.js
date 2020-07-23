export default function(value) {
	let {WebGL2RenderingContext} = globalThis;
	return !!WebGL2RenderingContext && value instanceof WebGL2RenderingContext;
}
