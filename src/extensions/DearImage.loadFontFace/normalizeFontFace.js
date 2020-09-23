import FontFace from '../../core/Font';
import Object_is from '../../core/Object/is';

import defaultFamily from './defaultFontFamily';
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
		family = normalizeFamily(value.family);
		style = normalizeStyle(value.style);
		variant = normalizeVariant(value.variant);
		weight = normalizeWeight(value.weight);
	}
	[family = defaultFamily] = [family];
	return new FontFace(family, {
		style,
		variant,
		weight,
	});
}