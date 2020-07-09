import resolveValue from './resolveValue';

export default function(value) {
	let [
		family,
		size,
		style,
		variant,
		weight,
	] = resolveValue(value);
	return Object.assign(new this(), {
		family,
		size,
		style,
		variant,
		weight,
	});
}
