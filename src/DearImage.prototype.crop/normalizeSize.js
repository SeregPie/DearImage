import String_is from '../core/String/is';

export default function(value) {
	if (String_is(value)) {
		value = Number(value);
	}
	if (Number.isFinite(value)) {
		return Math.round(value);
	}
}
