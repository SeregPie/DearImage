export function normalize(value) {
	if (value != null) {
		// todo
		return value % (Math.PI*2);
	}
	return 0;
}
