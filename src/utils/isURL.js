export default function(value) {
	try {
		return value instanceof URL;
	} catch {
		// pass
	}
	return false;
}
