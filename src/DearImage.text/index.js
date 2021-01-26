// todo

import CSS_font_combine from '../@core/CSS/font/combine';
import DearImage from '../@core/DearImage';
import Object_is from '../@core/Object/is';

import normalizeAlignment from './normalizeAlignment';
import normalizeFontFamily from './normalizeFontFamily';
import normalizeFontSize from './normalizeFontSize';
import normalizeFontStyle from './normalizeFontStyle';
import normalizeFontVariant from './normalizeFontVariant';
import normalizeFontWeight from './normalizeFontWeight';
import normalizeLineGap from './normalizeLineGap';
import normalizePadding from './normalizePadding';
import normalizeStrokeStyle from './normalizeStrokeStyle';
import normalizeStrokeWidth from './normalizeStrokeWidth';
import normalizeStyle from './normalizeStyle';
import normalizeText from './normalizeText';

DearImage.text = function(text, options) {
	let alignment;
	let fontFamily;
	let fontSize;
	let fontStyle;
	let fontVariant;
	let fontWeight;
	let lineGap;
	let padding;
	let strokeStyle;
	let strokeWidth;
	let style;
	{
		text = normalizeText(text);
		if (Object_is(options)) {
			alignment = options.alignment;
			if (Object_is(options.font)) {
				fontFamily = options.font.family;
				fontSize = options.font.size;
				fontStyle = options.font.style;
				fontVariant = options.font.variant;
				fontWeight = options.font.weight;
			}
			lineGap = options.lineGap;
			padding = options.padding;
			if (Object_is(options.stroke)) {
				strokeStyle = options.stroke.style;
				strokeWidth = options.stroke.width;
			}
			style = options.style;
		}
		alignment = normalizeAlignment(alignment);
		fontFamily = normalizeFontFamily(family);
		fontSize = normalizeFontSize(size);
		fontStyle = normalizeFontStyle(style);
		fontVariant = normalizeFontVariant(variant);
		fontWeight = normalizeFontWeight(weight);
		lineGap = normalizeLineGap(lineGap);
		padding = normalizePadding(padding);
		strokeStyle = normalizeStrokeStyle(strokeStyle);
		strokeWidth = normalizeStrokeWidth(strokeWidth);
		style = normalizeStyle(style);
	}
	padding *= fontSize;
	lineGap *= fontSize;
	strokeWidth *= fontSize;
	let font = CSS_font_combine(fontFamily, `${fontSize}px`, fontStyle, fontVariant, fontWeight);
	let lines = text ? text.split('\n') : [];
	let linesCount = lines.length;
	let lineOffset = fontSize + lineGap;
	let contentSizeX = (linesCount
		? (() => {
			let canvas = document.createElement('canvas');
			let ctx = canvas.getContext('2d');
			ctx.font = font;
			return Math.max(...lines.map(text => ctx.measureText(text).width));
		})()
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
		font: font.toCSS(),
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
