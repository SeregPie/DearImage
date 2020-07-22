import Object_is from '../core/Object/is';

import normalizeRepeat from './normalizeRepeat';

export default function(value) {
	let x;
	let y;
	if (Object_is(value)) {
		({
			x,
			y,
		} = value);
		x = normalizeRepeat(x);
		y = normalizeRepeat(y);
	} else {
		x = y = normalizeRepeat(value);
	}
	return [
		x,
		y,
	];
}
