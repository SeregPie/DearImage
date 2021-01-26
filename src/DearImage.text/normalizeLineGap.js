import toNonNegativeFinite from '../@core/CustomInput/toNonNegativeFinite';

import defaultValue from './defaultLineGap';

export default function(value) {
	return toNonNegativeFinite(value, defaultValue);
}
