import resolveValue from './resolveValue';

export default function(value) {
	let [
		family,
		style,
		variant,
		weight,
	] = resolveValue(value);
	return Object.assign(new this(), {
		family,
		style,
		variant,
		weight,
	});
}
