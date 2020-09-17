import Object_is from '../../../core/Object/is';

import normalizeAlignment from '../normalizeAlignment';
import normalizeFont from '../normalizeFont';
import normalizeLineGap from '../normalizeLineGap';
import normalizePadding from '../normalizePadding';
import normalizeStyle from '../normalizeStyle';
import resolveStroke from './resolveStroke';

export default function(value) {
	let alignment;
	let font;
	let lineGap;
	let padding;
	let strokeStyle;
	let strokeWidth;
	let style;
	if (Object_is(value)) {
		({
			alignment,
			font,
			lineGap,
			padding,
			stroke,
			style,
		} = value);
		alignment = normalizeAlignment(alignment);
		font = normalizeFont(font);
		lineGap = normalizeLineGap(lineGap);
		padding = normalizePadding(padding);
		[
			strokeStyle,
			strokeWidth,
		] = resolveStroke(stroke);
		style = normalizeStyle(style);
	}
	return [
		alignment,
		font,
		lineGap,
		padding,
		strokeStyle,
		strokeWidth,
		style,
	];
}
