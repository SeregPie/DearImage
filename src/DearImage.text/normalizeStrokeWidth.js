import toNonNegativeFinite from '../@core/CustomInput/toNonNegativeFinite';

import defaultValue from './defaultStrokeWidth';

export default function(value) {
	return toNonNegativeFinite(value, defaultValue);
}
