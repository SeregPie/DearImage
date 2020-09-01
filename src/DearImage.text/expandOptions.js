import Object_is from '../core/Object/is';

import normalizeFill from './normalizeFill';
import normalizeFont from './normalizeFont';
import normalizeLineGap from './normalizeLineGap';
import normalizePadding from './normalizePadding';

export default function(value) {
	let fill;
	let font;
	let lineGap;
	let padding;
	if (Object_is(value)) {
		({
			fill,
			font,
			lineGap,
			padding,
		} = value);
		fill = normalizeFill(fill);
		font = normalizeFont(font);
		lineGap = normalizeLineGap(lineGap);
		padding = normalizePadding(padding);
	}
	return [
		fill,
		font,
		lineGap,
		padding,
	];
}
