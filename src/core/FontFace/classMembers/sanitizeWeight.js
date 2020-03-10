import Number_isBetween from '../../Number/isBetween';
import String_is from '../../String/is';

import defaultValue from './defaultWeight';
import validValues from './validWeightValues';

export default function(value) {
	if (String_is(value)) {
		value = value.trim().toLowerCase();
		if (validValues.has(value)) {
			return value;
		}
	} else
	if (Number_isBetween(value, 1, 1000, true, true)) {
		value = Math.round(value);
		return value;
	}
	return defaultValue;
}
