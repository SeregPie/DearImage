export default function(value) {
	try {
		return value instanceof Blob;
	} catch {
		// pass
	}
	return false;
}
