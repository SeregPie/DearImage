import Object_is from '../../../core/Object/is';

import resolveAlignment from './resolveAlignment';
import resolveRepeat from './resolveRepeat';

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
		] = resolveAlignment(alignment);
		[
			repeatX,
			repeatY,
		] = resolveRepeat(repeat);
	}
	return [
		alignmentX,
		alignmentY,
		repeatX,
		repeatY,
	];
}
