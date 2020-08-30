export default function() {
	let {
		family,
		size,
		style,
		variant,
		weight,
	} = this;
	return [style, variant, weight, `${size}px`, family].join(' ');
}
