import DearImage from './DearImage';

import FontFace from './core/FontFace';
import Promise_try from './core/Promise/try';

DearImage.loadFontFace = function(fontFace, source) {
	return Promise_try(() => {
		return FontFace.fromExcept(fontFace).load(source);
	});
};
