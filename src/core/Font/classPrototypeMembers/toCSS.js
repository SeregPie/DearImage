import CSS_font from '../../CSS/font';

export default function() {
	let {
		family,
		size,
		style,
		variant,
		weight,
	} = this;
	return CSS_font(family, size, style, variant, weight);
}
