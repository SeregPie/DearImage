import Promise_try from 'x/src/Promise/try';
import String_isString from 'x/src/String/isString';

import PaperDuck from './PaperDuck';
import PaperDuck_loadFile from './loadFile';
import PaperDuck_loadFileReader from './loadFileReader';
import PaperDuck_loadImage from './loadImage';
import PaperDuck_loadInputElement from './loadInputElement';
import PaperDuck_loadString from './loadString';

export default function(value) {
	return Promise_try(() => {
		if (String_isString(value)) {
			return PaperDuck_loadString(value);
		}
		if (value instanceof HTMLImageElement) {
			return PaperDuck_loadImage(value);
		}
		if (value instanceof HTMLInputElement) {
			return PaperDuck_loadInputElement(value);
		}
		if (value instanceof File) {
			return PaperDuck_loadFile(value);
		}
		if (value instanceof FileReader) {
			return PaperDuck_loadFileReader(value);
		}
		return this.from(value);
	});
}
