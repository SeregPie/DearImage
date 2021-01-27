import DearImage from '../@core/DearImage';
import Object_is from '../@core/Object/is';






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
				({
					alignment,
					font,
					lineGap,
					padding,
					style,
				} = value);
				(value => {
					if (Object_is(value)) {
						({
							style: strokeStyle,
							width: strokeWidth,
						} = value);
					}
				})(value.stroke);
			}
		})(options);
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
