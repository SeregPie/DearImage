import './DearImage.blank';

import CanvasGradient_is from '../core/CanvasGradient/is';
import CanvasPattern_is from '../core/CanvasPattern/is';
import CSS_color_sanitize from '../core/CSS/color/sanitize';
import DearImage from '../core/DearImage';

let normalizeStyle = function(value) {
	if (
		CanvasGradient_is(value)
		||
		CanvasPattern_is(value)
	) {
		return value;
	}
	return CSS_color_sanitize(String(value));
};

DearImage.filled = function(style, sizeX, sizeY) {
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
