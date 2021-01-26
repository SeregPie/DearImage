import DearImage from '../@core/DearImage';

import normalizeFontFace from './normalizeFontFace';
import normalizeSource from './normalizeSource';

DearImage.loadFontFace = async function(fontFace, source) {
	fontFace = normalizeFontFace(fontFace);
	source = normalizeSource(source);
	await fontFace.load(source);
};
