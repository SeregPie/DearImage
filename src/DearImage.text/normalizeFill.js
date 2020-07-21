// todo

import String_isNonEmpty from '../core/String/isNonEmpty';

export default function(value, defaultValue) {
	if (String_isNonEmpty(value)) {
		return value;
	}
	return defaultValue;
}
