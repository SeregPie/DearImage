import Object_is from '../../../core/Object/is';
import String_is from '../../../core/String/is';

export default function(value, defaultValue) {
	if (Object_is(value)) {
		value = Number(String(value));
		if (Number.isFinite(value)) {
			return Math.round(value);
		}
	} else
	if (String_is(value)) {
		value = Number(value);
		if (Number.isFinite(value)) {
			return Math.round(value);
		}
	} else
	if (Number.isFinite(value)) {
		return Math.round(value);
	}
	return defaultValue;
}
