import DearImage from '../@core/DearImage';

import normalizeFont from './normalizeFont';
import normalizeText from './normalizeText';

DearImage.measureText = function(text, font) {
	{
		text = normalizeText(text);
		font = normalizeFont(font);
	}
	return font.measureText(text);
};
