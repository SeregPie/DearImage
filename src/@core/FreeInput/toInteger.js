import String_is from '../String/is';

export default function(value, defaultValue) {
	if (value != null) {
		if (String_is(value)) {
			value = Number(value);
		}
		if (Number.isFinite(value)) {
			return Math.round(value);
		}
		return defaultValue;
	}
}
