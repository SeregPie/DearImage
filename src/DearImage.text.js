import DearImage from './DearImage';

import Font from './core/Font';
import Number_isNonNegativeFinite from './core/Number/isNonNegativeFinite';
import Object_is from './core/Object/is';
import Object_isNullish from './core/Object/isNullish';
import String_isNonEmpty from './core/String/isNonEmpty';

DearImage.text = function(text, options) {
	text = Object_isNullish(text) ? '' : `${text}`;
	let fill = '#000';
	let font = Font.default;
	let padding = 0.28;
	if (Object_is(options)) {
		if (String_isNonEmpty(options.fill)) {
			fill = options.fill;
		}
		font = Font.fromExcept(options.font);
		if (Number_isNonNegativeFinite(options.padding)) {
			padding = options.padding;
		}
	}
	padding = Math.ceil(padding * font.size);
	let image = this.blank(
		this.measureText(text, font).width + padding * 2,
		font.size + padding * 2,
	);
	let {context} = image;
	context.save();
	context.font = font.toCSS();
	context.textBaseline = 'top';
	context.textAlign = 'left';
	context.fillStyle = fill;
	context.fillText(text, padding, padding);
	context.restore();
	return image;
};
