import Object_is from '../core/Object/is';

import expandOptionsAlignment from './expandOptionsAlignment';
import expandOptionsRepeat from './expandOptionsRepeat';

export default function(value) {
	let alignmentX;
	let alignmentY;
	let repeatX;
	let repeatY;
	if (Object_is(value)) {
		({
			alignment,
			repeat,
		} = value);
		[
			alignmentX,
			alignmentY,
		] = expandOptionsAlignment(alignment);
		[
			repeatX,
			repeatY,
		] = expandOptionsRepeat(repeat);
	}
	return [
		alignmentX,
		alignmentY,
		repeatX,
		repeatY,
	];
}
