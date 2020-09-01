// todo

import Object_isUndefined from '../core/Object/isUndefined';

export default function(value, defaultValue) {
	if (Object_isUndefined(value)) {
		return defaultValue;
	}
	return value;
}
