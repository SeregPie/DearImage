import Font from '../@core/Font';
import Object_is from '../@core/Object/is';

import normalizeFamily from './normalizeFontFamily';
import normalizeSize from './normalizeFontSize';
import normalizeStyle from './normalizeFontStyle';
import normalizeVariant from './normalizeFontVariant';
import normalizeWeight from './normalizeFontWeight';

export default function(value) {
	if (Font.is(value)) {
		return value;
	}
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
	}
	family = normalizeFamily(family);
	size = normalizeSize(size);
	style = normalizeStyle(style);
	variant = normalizeVariant(variant);
	weight = normalizeWeight(weight);
	return new Font(family, size, {
		style,
		variant,
		weight,
	});
}
