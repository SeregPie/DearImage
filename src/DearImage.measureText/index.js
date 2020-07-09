import '../DearImage.blank';
import DearImage from '../DearImage';

import Font from '../core/Font';

import normalizeText from './normalizeText';

DearImage.measureText = function(text, font) {
	text = normalizeText(text);
	let {context} = this.blank();
	context.font = Font.fromExcept(font).toCSS();
	return context.measureText(text);
};
