import FreeInput_toNonNegativeFiniteNumber from '../@core/FreeInput/toNonNegativeFiniteNumber';

import defaultValue from './defaultPadding';

export default function(value) {
	return FreeInput_toNonNegativeFiniteNumber(value, defaultValue);
}