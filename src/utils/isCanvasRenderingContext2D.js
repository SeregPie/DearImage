export default function(value) {
	return (
		(() => {
			try {
				return value instanceof CanvasRenderingContext2D;
			} catch {}
			return false;
		})()
		||
		(() => {
			try {
				let {CanvasRenderingContext2D} = require('canvas');
				return value instanceof CanvasRenderingContext2D;
			} catch {}
			return false;
		})()
	);
}
