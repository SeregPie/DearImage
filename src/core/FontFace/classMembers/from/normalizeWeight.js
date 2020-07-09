import Number_isBetween from '../../../Number/isBetween';
import Object_isUndefined from '../../../Object/isUndefined';
import String_is from '../../../String/is';

import defaultValue from './defaultWeight';
import validValues from './validWeightValues';

export default function(value) {
	if (Object_isUndefined(value)) {
		return defaultValue;
	}
	if (String_is(value)) {
		value = value.trim().toLowerCase();
		if (validValues.has(value)) {
			return value;
		}
	} else
	if (Number_isBetween(value, 1, 1000, true, true)) {
		return Math.round(value);
	}
	throw 0;
}
