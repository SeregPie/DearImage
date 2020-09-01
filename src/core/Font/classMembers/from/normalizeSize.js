import Number_isNonNegativeFinite from '../../../Number/isNonNegativeFinite';
import Object_isUndefined from '../../../Object/isUndefined';

import defaultValue from './defaultSize';

export default function(value) {
	if (Object_isUndefined(value)) {
		return defaultValue;
	}
	if (Number_isNonNegativeFinite(value)) {
		return Math.round(value);
	}
	throw 0;
}
