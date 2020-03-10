import FontFace from '../../FontFace';
import Object_is from '../../Object/is';

import defaultSize from './defaultSize';
import sanitizeSize from './sanitizeSize';

export default function(value) {
	let face = FontFace.default;
	let size = defaultSize;
	if (Object_is(value)) {
		face = FontFace.from(value);
		size = sanitizeSize(value.size);
	}
	let {
		family,
		style,
		variant,
		weight,
	} = face;
	return Object.assign(new this(), {
		family,
		size,
		style,
		variant,
		weight,
	});
}
