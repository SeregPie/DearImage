import DearImage from '../@core/DearImage';
import Object_is from '../@core/Object/is';

import './DearImage.measureText';

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
		if (Object_is(options)) {
			alignment = options.alignment;
			font = options.font;
			lineGap = options.lineGap;
			padding = options.padding;
			if (Object_is(options.stroke)) {
				strokeStyle = options.stroke.style;
				strokeWidth = options.stroke.width;
			}
			style = options.style;
		}
		alignment = normalizeAlignment(alignment);
		font = normalizeFont(font);
		lineGap = normalizeLineGap(lineGap);
		padding = normalizePadding(padding);
		strokeStyle = normalizeStrokeStyle(strokeStyle);
		strokeWidth = normalizeStrokeWidth(strokeWidth);
		style = normalizeStyle(style);
	}
	let {size: fontSize} = font;
	padding *= fontSize;
	lineGap *= fontSize;
	strokeWidth *= fontSize;
	let lines = text ? text.split('\n') : [];
	let {length: linesCount} = lines;
	let lineOffset = lineGap + fontSize;
	let textSizeX = linesCount ? Math.max(...lines.map(text => DearImage.measureText(text, font).width)) : 0;
	let textSizeY = linesCount ? (fontSize + lineOffset * (linesCount - 1)) : 0;
	let offset = padding + strokeWidth / 2;
	let sizeX = textSizeX + offset * 2;
	let sizeY = textSizeY + offset * 2;
	let x;
	let y = offset + fontSize / 2;
	let result = this.blank(sizeX, sizeY);
	({
		sizeX,
		sizeY,
	} = result);
	let {context} = result;
	context.save();
	Object.assign(context, {
		fillStyle: style,
		font: font.toCSS(),
		lineWidth: strokeWidth,
		miterLimit: 1,
		strokeStyle: strokeStyle,
		textAlign: (() => {
			switch (alignment) {
				case 'start':
					x = offset;
					return 'left';
				case 'end':
					x = sizeX - offset;
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
		y += lineOffset;
	});
	context.restore();
	return result;
};
