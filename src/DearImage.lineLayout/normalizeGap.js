import FreeInput_toNonNegativeIntegerNumber from '../@core/FreeInput/toNonNegativeIntegerNumber';

import defaultValue from './defaultGap';

export default function(value) {
	return FreeInput_toNonNegativeIntegerNumber(value, defaultValue);
}