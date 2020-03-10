export default function(value) {
	let {URL} = globalThis;
	return !!URL && value instanceof URL;
}
