import Number_isNonNegativeFinite from '../core/Number/isNonNegativeFinite';

export default function(value, defaultValue) {
	if (Number_isNonNegativeFinite(value)) {
		return Math.round(value);
	}
	return defaultValue;
}
