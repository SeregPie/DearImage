import CanvasRenderingContext2D_create from '../CanvasRenderingContext2D/create';
import String_is from '../String/is';

export default function(value, defaultValue) {
	if (String_is(value)) {
		let context = CanvasRenderingContext2D_create(0, 0);
		{
			let fallbackValue = '#000000';
			context.fillStyle = fallbackValue;
			context.fillStyle = value;
			if (context.fillStyle !== fallbackValue) {
				return context.fillStyle;
			}
		}
		{
			let fallbackValue = '#ffffff';
			context.fillStyle = fallbackValue;
			context.fillStyle = value;
			if (context.fillStyle !== fallbackValue) {
				return context.fillStyle;
			}
		}
	}
	return defaultValue;
}
