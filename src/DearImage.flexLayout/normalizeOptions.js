import Object_is from '../@core/Object/is';

import defaultLineGap from './defaultLineGap';
import defaultPadding from './defaultPadding';
import defaultStrokeStyle from './defaultStrokeStyle';
import defaultStrokeWidth from './defaultStrokeWidth';
import defaultStyle from './defaultStyle';
import normalizeAlignment from './normalizeAlignment';
import normalizeFont from './normalizeFont';
import normalizeLineGap from './normalizeLineGap';
import normalizePadding from './normalizePadding';
import normalizeStrokeStyle from './normalizeStrokeStyle';
import normalizeStrokeWidth from './normalizeStrokeWidth';
import normalizeStyle from './normalizeStyle';

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
			style,
		} = value);
		alignment = normalizeAlignment(alignment);
		lineGap = normalizeLineGap(lineGap);
		padding = normalizePadding(padding);
		style = normalizeStyle(style);
		(value => {
			if (Object_is(value)) {
				({
					style: strokeStyle,
					width: strokeWidth,
				} = value);
				strokeStyle = normalizeStrokeStyle(strokeStyle);
				strokeWidth = normalizeStrokeWidth(strokeWidth);
			}
		})(value.stroke);
	}
	font = normalizeFont(font);
	({
		lineGap = defaultLineGap,
		padding = defaultPadding,
		strokeStyle = defaultStrokeStyle,
		strokeWidth = defaultStrokeWidth,
		style = defaultStyle,
	} = {
		lineGap,
		padding,
		strokeStyle,
		strokeWidth,
		style,
	});
	return {
		alignment,
		font,
		lineGap,
		padding,
		strokeStyle,
		strokeWidth,
		style,
	};
}
