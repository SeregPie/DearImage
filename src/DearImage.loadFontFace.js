import DearImage from './DearImage';

import FontFace from './core/FontFace';

DearImage.loadFontFace = async function(fontFace, source) {
	return FontFace.fromExcept(fontFace).load(source);
};
