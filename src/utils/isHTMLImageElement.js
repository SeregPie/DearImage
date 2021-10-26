export default function(value) {
	try {
		return value instanceof HTMLImageElement;
	} catch {}
	return false;
}
