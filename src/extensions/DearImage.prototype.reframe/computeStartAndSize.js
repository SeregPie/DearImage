import computeStart from './computeStart';
import normalizeSize from './normalizeSize';

export default function(alignment, size, currentSize) {
	size = normalizeSize(size, currentSize);
	let start = computeStart(alignment, size, currentSize);
	return [
		start,
		size,
	];
}
