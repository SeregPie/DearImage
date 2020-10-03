export default function(value, defaultValue) {
	value = Number(value);
	if (Number.isFinite(value)) {
		return value;
	}
	return defaultValue;
}