// todo

import Object_isUndefined from '../core/Object/isUndefined';

export default function(value) {
	if (Object_isUndefined(value)) {
		// pass
	} else {
		return !!value;
	}
}
