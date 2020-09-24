import Font from '../@core/Font';
import Object_is from '../@core/Object/is';

import defaultFamily from './defaultFontFamily';
import defaultSize from './defaultFontSize';
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
		family = normalizeFamily(value.family);
		size = normalizeSize(value.size);
		style = normalizeStyle(value.style);
		variant = normalizeVariant(value.variant);
		weight = normalizeWeight(value.weight);
	}
	[
		family = defaultFamily,
		size = defaultSize,
	] = [
		family,
		size,
	];
	return new Font(family, size, {
		style,
		variant,
		weight,
	});
}