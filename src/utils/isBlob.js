export default function(value) {
	try {
		return value instanceof Blob;
	} catch {}
	return false;
}
