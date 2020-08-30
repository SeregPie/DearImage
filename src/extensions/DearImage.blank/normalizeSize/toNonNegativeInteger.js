import Object_is from '../../../core/Object/is';
import String_is from '../../../core/String/is';
import Number_isNonNegativeFinite from '../../../core/Number/isNonNegativeFinite';

export default function(value, defaultValue) {
	if (Object_is(value)) {
		value = Number(String(value));
		if (Number_isNonNegativeFinite(value)) {
			return Math.round(value);
		}
	} else
	if (String_is(value)) {
		value = Number(value);
		if (Number_isNonNegativeFinite(value)) {
			return Math.round(value);
		}
	} else
	if (Number_isNonNegativeFinite(value)) {
		return Math.round(value);
	}
	return defaultValue;
}
