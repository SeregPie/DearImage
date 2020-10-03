export default function(value, defaultValue) {
	value = Number(value);
	if (Number.isFinite(value)) {
		return Math.round(value);
	}
	return defaultValue;
}