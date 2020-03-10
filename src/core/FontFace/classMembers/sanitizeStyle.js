import String_is from '../../String/is';

import defaultValue from './defaultStyle';
import validValues from './validStyleValues';

export default function(value) {
	if (String_is(value)) {
		value = value.trim().toLowerCase();
		if (validValues.has(value)) {
			return value;
		}
	}
	return defaultValue;
}
