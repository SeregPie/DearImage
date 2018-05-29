import Object_isObject from '/utils/Object/isObject';
import String_isString from '/utils/String/isString';

import PaperDuck from './index';

PaperDuck.from = function(value) {
	if (String_isString(value)) {
		return this.fromString(value);
	}
	if (Object_isObject(value)) {
		if (value.canvas instanceof HTMLCanvasElement) {
			return this.fromImageSource(value.canvas);
		}
		return this.fromImageSource(value);
	}
	return this.blank();
};
