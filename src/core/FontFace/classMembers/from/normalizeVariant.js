import Object_isUndefined from '../../../Object/isUndefined';
import String_is from '../../../String/is';

import defaultValue from './defaultVariant';
import validValues from './validVariantValues';

export default function(value) {
	if (Object_isUndefined(value)) {
		return defaultValue;
	}
	if (String_is(value)) {
		value = value.trim().toLowerCase();
		if (validValues.has(value)) {
			return value;
		}
	}
	throw 0;
}
