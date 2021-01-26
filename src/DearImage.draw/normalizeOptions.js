import Object_is from '../@core/Object/is';

export default function(value) {
	let alignmentX;
	let alignmentY;
	let repeatX;
	let repeatY;
	if (Object_is(value)) {
		(value => {
			if (Object_is(value)) {
				alignmentX = value.x;
				alignmentY = value.y;
			} else {
				alignmentX = alignmentY = value;
			}
		})(value.alignment);
		(value => {
			if (Object_is(value)) {
				repeatX = value.x;
				repeatY = value.y;
			} else {
				repeatX = repeatY = value;
			}
		})(value.repeat);
	}
	return {
		alignmentX,
		alignmentY,
		repeatX,
		repeatY,
	};
}
