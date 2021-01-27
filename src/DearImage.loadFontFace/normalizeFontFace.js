import FontFace from '../@core/FontFace';
import Object_is from '../@core/Object/is';

import normalizeFamily from './normalizeFontFamily';
import normalizeStyle from './normalizeFontStyle';
import normalizeVariant from './normalizeFontVariant';
import normalizeWeight from './normalizeFontWeight';

export default function(value) {
	if (FontFace.is(value)) {
		return value;
	}
	let family;
	let style;
	let variant;
	let weight;
	if (Object_is(value)) {
		({
			family,
			style,
			variant,
			weight,
		} = value);
	} else {
		family = value;
	}
	family = normalizeFamily(family);
	style = normalizeStyle(style);
	variant = normalizeVariant(variant);
	weight = normalizeWeight(weight);
	return new FontFace(family, {
		style,
		variant,
		weight,
	});
}
