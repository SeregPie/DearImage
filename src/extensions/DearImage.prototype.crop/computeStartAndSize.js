import normalizeSize from './normalizeSize';
import normalizeStart from './normalizeStart';

export default function(start, size, currentSize) {
	start = normalizeStart(start, 0);
	if (start < 0) {
		start += currentSize;
	}
	size = normalizeSize(size, currentSize);
	if (size < 0) {
		start += size;
		size *= -1;
	}
	return [
		start,
		size,
	];
}
