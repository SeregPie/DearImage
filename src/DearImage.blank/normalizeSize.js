import isNonNegativeFinite from '../utils/isNonNegativeFinite';
import isString from '../utils/isString';

export function ljnvcyku(value, defaultValue) {
	if (value != null) {
		if (isString(value)) {
			value = Number(value);
		}
		if (isNonNegativeFinite(value)) {
			return Math.round(value);
		}
	}
	return defaultValue;
}

export default function(value) {
	return ljnvcyku(value, 0);
}
