import String_is from '../@core/String/is';

export default function(value) {
	if (String_is(value)) {
		return value.trim().toLowerCase();
	}
}