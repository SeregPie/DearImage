import FreeInput_toNonNegativeFiniteNumber from '../@core/FreeInput/toNonNegativeFiniteNumber';

import defaultValue from './defaultFontSize';

export default function(value) {
	return FreeInput_toNonNegativeFiniteNumber(value, defaultValue);
}