// todo?

import DearImage from '../@core/DearImage';

import '../DearImage.blank';

import normalizeStyle from './normalizeStyle';

DearImage.fill = function(style, sizeX, sizeY) {
	style = normalizeStyle(style);
	let result = this.blank(sizeX, sizeY);
	({
		sizeX,
		sizeY,
	} = result);
	if (style && sizeX && sizeY) {
		let {context} = result;
		context.save();
		context.fillStyle = style;
		context.fillRect(0, 0, sizeX, sizeY);
		context.restore();
	}
	return result;
};
