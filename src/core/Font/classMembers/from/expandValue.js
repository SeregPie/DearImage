import FontFace from '../../../FontFace';
import Object_is from '../../../Object/is';

import normalizeSize from './normalizeSize';

export default function(value) {
	let face;
	let size;
	if (Object_is(value)) {
		({
			size,
			...face
		} = value);
		size = normalizeSize(size);
		face = FontFace.from(face);
	} else {
		throw 0;
	}
	let {
		family,
		style,
		variant,
		weight,
	} = face;
	return [
		family,
		size,
		style,
		variant,
		weight,
	];
}
