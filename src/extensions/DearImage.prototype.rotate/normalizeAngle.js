export default function(value) {
	value = Number(value);
	if (Number.isFinite(value)) {
		return value % (Math.PI*2);
	}
}