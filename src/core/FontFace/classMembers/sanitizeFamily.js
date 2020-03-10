import String_isNonEmpty from '../../String/isNonEmpty';

import defaultValue from './defaultFamily';

export default function(value) {
	if (String_isNonEmpty(value)) {
		return value;
	}
	return defaultValue;
}
