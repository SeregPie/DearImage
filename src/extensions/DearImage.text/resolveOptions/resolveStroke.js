import Object_is from '../../../core/Object/is';

import normalizeStyle from '../normalizeStrokeStyle';
import normalizeWidth from '../normalizeStrokeWidth';

export default function(value) {
	let style;
	let width;
	if (Object_is(value)) {
		({
			style,
			width,
		} = value);
		style = normalizeStyle(style);
		width = normalizeWidth(width);
	}
	return [
		style,
		width,
	];
}
