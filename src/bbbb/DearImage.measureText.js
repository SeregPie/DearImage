import CanvasRenderingContext2D_create from '../core/CanvasRenderingContext2D/create';
import DearImage from '../core/DearImage';

let normalizeText = function(value) {
	if (value != null) {
		return String(value);
	}
};
let normalizeFont = function(value) {
	if (value != null) {
		return String(value);
	}
};

DearImage.measureText = function(text, font) {
	let fontFamily;
	let fontSize;
	let fontStyle;
	let fontVariant;
	let fontWeight;
	(value => {
		if (Object_is(value)) {
			fontFamily = normalizeFontFamily(value.family);
			fontSize = normalizeFontSize(value.size);
			fontStyle = normalizeFontStyle(value.style);
			fontVariant = normalizeFontVariant(value.variant);
			fontWeight = normalizeFontWeight(value.weight);
		}
	})(font);
	[
		fontFamily = CSS_fontFamily_default,
		fontSize = CSS_fontSize_default,
		text = '',
	] = [
		fontFamily,
		fontSize,
		normalizeText(text),
	];
	font = (new Font(fontFamily, fontSize, {
		style: fontStyle,
		variant: fontVariant,
		weight: fontWeight,
	})).toCSS();
	let context = CanvasRenderingContext2D_create(0, 0);
	context.font = font;
	return context.measureText(text);
};
