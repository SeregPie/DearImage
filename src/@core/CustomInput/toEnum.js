import String_is from '../String/is';

export default function(value) {
	if (value != null) {
		if (String_is(value)) {
			return value.trim().toLowerCase();
		}
	}
}
