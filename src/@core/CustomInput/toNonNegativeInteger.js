import Number_isNonNegativeFinite from '../Number/isNonNegativeFinite';
import String_is from '../String/is';

export default function(value, defaultValue) {
	if (String_is(value)) {
		value = Number(value);
	}
	if (Number_isNonNegativeFinite(value)) {
		return Math.round(value);
	}
	return defaultValue;
}
