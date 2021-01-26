import CanvasGradient_is from '../CanvasGradient/is';
import CanvasPattern_is from '../CanvasPattern/is';
import FreeInput_toColor from './toColor';

export default function(value, defaultValue) {
	if (value != null) {
		if (
			CanvasGradient_is(value)
			||
			CanvasPattern_is(value)
		) {
			return value;
		}
		return FreeInput_toColor(value, defaultValue);
	}
	return defaultValue;
}
