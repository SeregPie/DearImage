import DearImage from '../@core/DearImage';

import normalizeOptions from './normalizeOptions';
import normalizeText from './normalizeText';

DearImage.text = function(text, options) {
	text = normalizeText(text);
	let {
		alignment,
		font,
		lineGap,
		padding,
		strokeStyle,
		strokeWidth,
		style,
	} = normalizeOptions(options);
	let {size: fontSize} = font;
	padding *= fontSize;
	lineGap *= fontSize;
	strokeWidth *= fontSize;
	let lines = text ? text.split('\n') : [];
	let linesCount = lines.length;
	let lineOffset = fontSize + lineGap;
	let contentSizeX = (linesCount
		? Math.max(...lines.map(text => font.measureText(text).width))
		: 0
	);
	let contentSizeY = (linesCount
		? (fontSize + lineOffset * (linesCount - 1))
		: 0
	);
	let contentOffset = padding + strokeWidth / 2;
	let sizeX = contentSizeX + contentOffset * 2;
	let sizeY = contentSizeY + contentOffset * 2;
	let x;
	let y = contentOffset + fontSize / 2;
	let result = this.blank(sizeX, sizeY);
	({
		sizeX,
		sizeY,
	} = result);
	let {context} = result;
	context.save();
	Object.assign(context, {
		fillStyle: style,
		font: `${font}`,
		lineWidth: strokeWidth,
		miterLimit: 1,
		strokeStyle: strokeStyle,
		textAlign: (() => {
			switch (alignment) {
				case 'start':
					x = contentOffset;
					return 'left';
				case 'end':
					x = sizeX - contentOffset;
					return 'right';
			}
			x = sizeX / 2;
			return 'center';
		})(),
		textBaseline: 'middle',
	});
	lines.forEach(text => {
		context.fillText(text, x, y);
		if (strokeWidth) {
			context.strokeText(text, x, y);
		}
		y += lineOffset;
	});
	context.restore();
	return result;
};
