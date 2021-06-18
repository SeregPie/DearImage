export default function(value) {
	return (
		(() => {
			try {
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
