import Number_isNonNegativeFinite from '../../Number/isNonNegativeFinite';

import defaultValue from './defaultSize';

export default function(value) {
	if (Number_isNonNegativeFinite(value)) {
		value = Math.round(value);
		return value;
	}
	return defaultValue;
}
