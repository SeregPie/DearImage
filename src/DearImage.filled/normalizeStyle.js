import CanvasGradient_is from '../@core/CanvasGradient/is';
import CanvasPattern_is from '../@core/CanvasPattern/is';

export default function(value) {
	// todo
	if (value != null) {
		if (
			CanvasGradient_is(value)
			||
			CanvasPattern_is(value)
		) {
			return value;
		}
		return value;
	}
}
