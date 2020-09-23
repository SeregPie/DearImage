// todo

import './DearImage.measureText';

import DearImage from '../../core/DearImage';

import normalizeAlignment from './normalizeAlignment';
import normalizeFont from './normalizeFont';
import normalizeLineGap from './normalizeLineGap';
import normalizePadding from './normalizePadding';
import normalizeStrokeStyle from './normalizeStrokeStyle';
import normalizeStrokeWidth from './normalizeStrokeWidth';
import normalizeStyle from './normalizeStyle';
import normalizeText from './normalizeText';

DearImage.text = function(text, options) {
	let alignment;
	let font;
	let lineGap;
	let padding;
	let strokeStyle;
	let strokeWidth;
	let style;
	{
		text = normalizeText(text);
		(value => {
			if (Object_is(value)) {
				alignment = normalizeAlignment(value.alignment);
				({font} = value);
				lineGap = normalizeLineGap(value.lineGap);
				padding = normalizePadding(value.padding);
				(value => {
					if (Object_is(value)) {
						strokeStyle = normalizeStrokeStyle(value.style);
						strokeWidth = normalizeStrokeWidth(value.width);
					}
				})(value.stroke);
				style = normalizeStyle(value.style);
			}
		})(options);
		[
			font,
			lineGap = 1/2,
			padding = 1,
			strokeStyle = '#000',
			strokeWidth = 0,
			style = '#000',
			text,
		] = [
			normalizeFont(font),
			lineGap,
			padding,
			strokeStyle,
			strokeWidth,
			style,
			normalizeText(text),
		];

		font = normalizeFont(font);
	}
	let {size: fontSize} = font;
	padding *= fontSize;
	lineGap *= fontSize;
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
