import {defaultValue} from './normalizeStyle';

export {defaultValue};

export default function(value) {
	if (value != null) {
		// todo
		return value;
	}
	return defaultValue;
}
