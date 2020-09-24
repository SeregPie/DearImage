export default function(value) {
	value = Number(value);
	if (Number.isFinite(value)) {
		return Math.round(value);
	}
}