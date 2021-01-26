import String_is from '../String/is';

export default function(value, defaultValue) {
	if (String_is(value)) {
		value = Number(value);
	}
	if (Number.isFinite(value)) {
		return value;
	}
	return defaultValue;
}
