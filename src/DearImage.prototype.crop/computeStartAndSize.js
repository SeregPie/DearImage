import Object_isUndefined from '../core/Object/isUndefined';

import normalizeSize from './normalizeSize';
import normalizeStart from './normalizeStart';

export default function(start, newSize, oldSize) {
	start = normalizeStart(start);
	if (Object_isUndefined(start)) {
		start = 0;
	} else
	if (start < 0) {
		start += oldSize;
	}
	newSize = normalizeSize(newSize);
	if (Object_isUndefined(newSize)) {
		newSize = oldSize;
	} else
	if (newSize < 0) {
		start += newSize;
		newSize *= -1;
	}
	return [
		start,
		newSize,
	];
}
