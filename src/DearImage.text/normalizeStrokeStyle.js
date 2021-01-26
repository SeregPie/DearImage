import toCanvasStyle from '../@core/CustomInput/toCanvasStyle';

import defaultValue from './defaultStrokeStyle';

export default function(value) {
	return toCanvasStyle(value, defaultValue);
}
