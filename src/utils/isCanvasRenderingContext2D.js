export default function(value) {
	return (
		(() => {
			try {
				let {CanvasRenderingContext2D} = globalThis;
				return value instanceof CanvasRenderingContext2D;
			} catch {
				// pass
			}
			return false;
		})()
		||
		(() => {
			try {
				let {CanvasRenderingContext2D} = require('canvas');
				return value instanceof CanvasRenderingContext2D;
			} catch {
				// pass
			}
			return false;
		})()
	);
}
