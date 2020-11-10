import DearImage from '../@core/DearImage';

import normalizeFontFamily from './normalizeFontFamily';
import normalizeFontStyle from './normalizeFontStyle';
import normalizeFontVariant from './normalizeFontVariant';
import normalizeFontWeight from './normalizeFontWeight';
import normalizeSource from './normalizeSource';

DearImage.loadFontFace = async function(fontFace, source) {
	let fontFamily;
	let fontStyle;
	let fontVariant;
	let fontWeight;
	{
		if (String_is(fontFace)) {
			fontFamily = fontFace;
		} else
		if (Object_is(fontFace)) {
			fontFamily = fontFace.family;
			fontStyle = fontFace.style;
			fontVariant = fontFace.variant;
			fontWeight = fontFace.weight;
		}
		fontFamily = normalizeFontFamily(family);
		fontStyle = normalizeFontStyle(style);
		fontVariant = normalizeFontVariant(variant);
		fontWeight = normalizeFontWeight(weight);
		source = normalizeSource(source);
	}
	await fontFace.load(source);
};
