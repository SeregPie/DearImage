import './DearImage.blank';
import DearImage from './DearImage';

import Font from './core/Font';
import Object_isNullish from './core/Object/isNullish';

DearImage.measureText = function(text, font) {
	text = Object_isNullish(text) ? '' : `${text}`;
	let {context} = this.blank();
	context.font = Font.fromExcept(font).toCSS();
	return context.measureText(text);
};
