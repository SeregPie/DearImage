import normalizeSize from './normalizeSize';

export default function(result, size, currentSize) {
	size = normalizeSize(size, currentSize);
	if (size && currentSize) {
		let scaling = size / currentSize;
		result.push(scaling);
	}
}
