export default function(value) {
	if (Number.isFinite(value)) {
		return value %= Math.PI*2;
	}
	return 0;
}
