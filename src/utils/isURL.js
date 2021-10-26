export default function(value) {
	try {
		return value instanceof URL;
	} catch {}
	return false;
}
