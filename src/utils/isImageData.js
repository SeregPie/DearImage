export default function(value) {
	return (
		(() => {
			try {
				let {ImageData} = globalThis;
				return value instanceof ImageData;
			} catch {
				// pass
			}
			return false;
		})()
		||
		(() => {
			try {
				let {ImageData} = require('canvas');
				return value instanceof ImageData;
			} catch {
				// pass
			}
			return false;
		})()
	);
}
