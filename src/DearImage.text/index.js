import DearImage from '../DearImage';

import defaultFill from './defaultFill';
import defaultFont from './defaultFont';
import defaultPadding from './defaultPadding';
import normalizeText from './normalizeText';
import resolveOptions from './resolveOptions';

DearImage.text = function(text, options) {
	text = normalizeText(text);
	let [
		fill = defaultFill,
		font = defaultFont,
		padding = defaultPadding,
	] = resolveOptions(options);
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
