// todo

import Object_isUndefined from '../../../Object/isUndefined';
import String_isNonEmpty from '../../../String/isNonEmpty';

import defaultValue from './defaultFamily';

export default function(value) {
	if (Object_isUndefined(value)) {
		return defaultValue;
	}
	if (String_isNonEmpty(value)) {
		return value;
	}
	throw 0;
}
