import Object_is from '../core/Object/is';

import normalizeFill from './normalizeFill';
import normalizeFont from './normalizeFont';
import normalizePadding from './normalizePadding';

export default function(value) {
	let fill;
	let font;
	let padding;
	if (Object_is(value)) {
		({
			fill,
			font,
			padding,
		} = value);
		fill = normalizeFill(fill);
		font = normalizeFont(font);
		padding = normalizePadding(padding);
	}
	return [
		fill,
		font,
		padding,
	];
}
