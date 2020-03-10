import String_is from '../String/is';

export default function(string) {
	if (String_is(string)) {
		let {URL} = globalThis;
		if (URL) {
			let {document} = globalThis;
			let origin = document && document.location && document.location.origin;
			try {
				return new URL(string, origin);
			} catch (unused) {
				// pass
			}
		}
	}
	return false;
}
