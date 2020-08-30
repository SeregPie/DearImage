import Object_is from '../../../core/Object/is';
import String_is from '../../../core/String/is';

export default function(value, defaultValue) {
	if (Object_is(value)) {
		value = String(value);
		return value.trim().toLowerCase();
	}
	if (String_is(value)) {
		return value.trim().toLowerCase();
	}
	return defaultValue;
}
