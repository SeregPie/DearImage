import CanvasRenderingContext2D_create from '../core/CanvasRenderingContext2D/create';
import DearImage from '../core/DearImage';

DearImage.measureText = function(text, font) {
	// todo
	text = (value => Object_isNullish(value) ? '' : String(value))(text);
	font = font.toCSS();
	let context = CanvasRenderingContext2D_create(0, 0);
	context.font = font;
	return context.measureText(text);
};
