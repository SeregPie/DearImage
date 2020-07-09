export default function(value) {
	if (Number.isFinite(value)) {
		return Math.round(value);
	}
}
