import CanvasGradient_is from '../@core/CanvasGradient/is';
import CanvasPattern_is from '../@core/CanvasPattern/is';

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