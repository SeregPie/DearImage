import String_isString from '/utils/String/isString';

import PaperDuck from './index';

PaperDuck.load = function(value) {
	return Promise.try(() => {
		if (String_isString(value)) {
			return this.loadString(value);
		}
		if (value instanceof HTMLImageElement) {
			return this.loadImage(value);
		}
		if (value instanceof HTMLInputElement) {
			return this.loadInput(value);
		}
		if (value instanceof File) {
			return this.loadFile(value);
		}
		if (value instanceof FileReader) {
			return this.loadFileReader(value);
		}
		return this.from(value);
	});
};
