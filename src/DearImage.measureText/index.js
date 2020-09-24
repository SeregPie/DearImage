import CanvasRenderingContext2D_create from '../@core/CanvasRenderingContext2D/create';
import DearImage from '../@core/DearImage';

import normalizeFont from './normalizeFont';
import normalizeText from './normalizeText';

DearImage.measureText = function(text, font) {
	{
		text = normalizeText(text);
		font = normalizeFont(font);
	}
	let context = CanvasRenderingContext2D_create(0, 0);
	context.font = font.toCSS();
	return context.measureText(text);
};
