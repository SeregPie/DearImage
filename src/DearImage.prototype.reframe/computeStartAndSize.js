import computeStart from './computeStart';
import normalizeAlignment from './normalizeAlignment';
import normalizeSize from './normalizeSize';

export default function(alignment, newSize, oldSize) {
	alignment = normalizeAlignment(alignment);
	newSize = normalizeSize(newSize, oldSize);
	let start = computeStart(alignment, newSize, oldSize);
	return [
		start,
		newSize,
	];
}
