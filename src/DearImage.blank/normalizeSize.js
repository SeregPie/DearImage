import isFinite from '../utils/isFinite';
import isString from '../utils/isString';

// todo: rename
export function ljnvcyku(value, defaultValue) {
	if (value != null) {
		if (isString(value)) {
			value = Number(value);
		}
		if (isFinite(value)) {
			if (value > 0) {
				return Math.ceil(value);
			}
		}
	}
	return defaultValue;
}

export default function(value) {
	return ljnvcyku(value, 0);
}
