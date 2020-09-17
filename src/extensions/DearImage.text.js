// todo

import './DearImage.measureText';

import DearImage from '../core/DearImage';
import Number_isNonNegativeFinite from '../core/Number/isNonNegativeFinite';
import String_is from '../core/String/is';

let normalizeText = function(value) {
	if (value != null) {
		return String(value);
	}
};
let normalizeAlignment = function(value) {
	if (String_is(value)) {
		return value.trim().toLowerCase();
	}
};
let normalizePadding = function(value) {
	value = Number(value);
	if (Number_isNonNegativeFinite(value)) {
		return value;
	}
};
let normalizeLineGap = normalizePadding;
let normalizeStrokeWidth = normalizePadding;

DearImage.text = function(text, options) {
	text = normalizeText(text);
	let alignment;
	let font;
	let lineGap;
	let padding;
	let strokeStyle;
	let strokeWidth;
	let style;
	(value => {
		if (Object_is(value)) {
			alignment = normalizeAlignment(value.alignment);
			font = normalizeFont(value.font);
			(value => {
				if (Object_is(value)) {
					fontFamily = normalizeFontFamily(value.family);
					fontSize = normalizeFontSize(value.size);
					fontStyle = normalizeFontStyle(value.style);
					fontVariant = normalizeFontVariant(value.variant);
					fontWeight = normalizeFontWeight(value.weight);
				}
			})(value.font);
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
		alignment,
		font,
		lineGap = 1/2,
		padding = 1,
		strokeStyle = '#000',
		strokeWidth = 0,
		style = '#000',
		text = '',
	] = [
		alignment,
		font,
		lineGap,
		padding,
		strokeStyle,
		strokeWidth,
		style,
		text,
	];
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
