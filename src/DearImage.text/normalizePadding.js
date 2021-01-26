import toNonNegativeFinite from '../@core/CustomInput/toNonNegativeFinite';

import defaultValue from './defaultPadding';

export default function(value) {
	return toNonNegativeFinite(value, defaultValue);
}
