import Object_is from '../../../core/Object/is';

import normalizeFamily from '../normalizeFontFamily';
import normalizeSize from '../normalizeFontSize';
import normalizeStyle from '../normalizeFontStyle';
import normalizeVariant from '../normalizeFontVariant';
import normalizeWeight from '../normalizeFontWeight';

export default function(value) {
	let family;
	let size;
	let style;
	let variant;
	let weight;
	if (Object_is(value)) {
		({
			family,
			size,
			style,
			variant,
			weight,
		} = value);
		family = normalizeFamily(family);
		size = normalizeSize(size);
		style = normalizeStyle(style);
		variant = normalizeVariant(variant);
		weight = normalizeWeight(weight);
	}
	return [
		family,
		size,
		style,
		variant,
		weight,
	];
}
