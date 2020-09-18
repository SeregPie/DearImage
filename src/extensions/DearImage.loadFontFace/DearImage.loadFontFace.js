import DearImage from '../../core/DearImage';

import normalizeFontFace from '../../bbbb/DearImage.loadFontFace/normalizeFontFace';
import normalizeSource from '../../bbbb/DearImage.loadFontFace/normalizeSource';

DearImage.loadFontFace = async function(fontFace, source) {
	fontFace = normalizeFontFace(fontFace);
	source = normalizeSource(source);
	await fontFace.load(source);
};
