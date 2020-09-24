import String_is from '../String/is';

export default function(string) {
	try {
		if (String_is(string)) {
			let {URL} = globalThis;
			if (URL) {
				let {document} = globalThis;
				if (document) {
					return new URL(string, document.location.origin);
				}
				return new URL(string);
			}
		}
	} catch {
		// pass
	}
	throw new Error('Invalid URL.');
}
