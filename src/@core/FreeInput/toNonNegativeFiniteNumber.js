import Number_isNonNegativeFinite from '../@core/Number/isNonNegativeFinite';

export default function(value, defaultValue) {
	value = Number(value);
	if (Number_isNonNegativeFinite(value)) {
		return value;
	}
	return defaultValue;
}