// todo

import '../DearImage.measureText';

import DearImage from '../../core/DearImage';

import normalizeOptions from './normalizeOptions';
import normalizeText from './normalizeText';

DearImage.text = function(text, options) {
	text = normalizeText(text);
	let [
		alignment,
		font,
		lineGap,
		padding,
		strokeStyle,
		strokeWidth,
		style,
	] = normalizeOptions(options);
	let {size: fontSize} = font;
	padding += strokeWidth / 2;
	padding *= fontSize;
	lineGap *= fontSize;
	lineGap += fontSize;
	strokeWidth *= fontSize;
	let lines = text ? text.split('\n') : [];
	let {length: linesCount} = lines;
	let textSizeX = linesCount ? Math.max(...lines.map(text => DearImage.measureText(text, font).width)) : 0;
	let textSizeY = linesCount ? (fontSize + lineGap * (linesCount - 1)) : 0;
	let sizeX = textSizeX + padding * 2;
	let sizeY = textSizeY + padding * 2;
	let x;
	let y = padding + fontSize / 2;
	font = font.toCSS();
	let result = this.blank(sizeX, sizeY);
	let {context} = result;
	context.save();
	Object.assign(context, {
		fillStyle: style,
		font: font,
		lineWidth: strokeWidth,
		miterLimit: 1,
		strokeStyle: strokeStyle,
		textAlign: (() => {
			switch (alignment) {
				case 'start':
					x = padding;
					return 'left';
				case 'end':
					x = sizeX - padding;
					return 'right';
			}
			x = sizeX / 2;
			return 'center';
		})(),
		textBaseline:  'middle',
	});
	lines.forEach(text => {
		context.fillText(text, x, y);
		if (strokeWidth) {
			context.strokeText(text, x, y);
		}
		y += lineGap;
	});
	context.restore();
	return result;
};
