import CanvasGradient_is from '../CanvasGradient/is';
import CanvasPattern_is from '../CanvasPattern/is';

import normalizeColor from './normalizeColor';

export default function(value) {
	if (
		CanvasGradient_is(value)
		||
		CanvasPattern_is(value)
	) {
		return value;
	}
	return normalizeColor(value);
}

import CSS_color_sanitize from '../CSS/color/sanitize';

export default function(value) {
	if (value != null) {
		return CSS_color_sanitize(String(value));
	}
}