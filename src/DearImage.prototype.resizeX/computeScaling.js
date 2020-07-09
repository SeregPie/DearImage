import normalizeSize from './normalizeSize';

export default function(newSize, oldSize) {
	newSize = normalizeSize(newSize, oldSize);
	return newSize / oldSize;
}
