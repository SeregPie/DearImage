import Object_is from '../../../core/Object/is';

export default function(value) {
	let x;
	let y;
	if (Object_is(value)) {
		({
			x,
			y,
		} = value);
	} else {
		x = y = value;
	}
	return [
		x,
		y,
	];
}
