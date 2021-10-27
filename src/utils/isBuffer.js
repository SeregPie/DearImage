export default function(value) {
	try {
		return value instanceof Buffer;
	} catch {
		// pass
	}
	return false;
}
