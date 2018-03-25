import Promise_try from 'x/src/Promise/try';
import String_isString from 'x/src/String/isString';

import PaperDuck from '../PaperDuck';

import loadFile from './loadFile';
import loadFileReader from './loadFileReader';
import loadImage from './loadImage';
import loadInputElement from './loadInputElement';
import loadString from './loadString';

PaperDuck.load = function(value) {
	return Promise_try(() => {
		if (String_isString(value)) {
			return loadString.call(this, value);
		}
		if (value instanceof HTMLImageElement) {
			return loadImage.call(this, value);
		}
		if (value instanceof HTMLInputElement) {
			return loadInputElement.call(this, value);
		}
		if (value instanceof File) {
			return loadFile.call(this, value);
		}
		if (value instanceof FileReader) {
			return loadFileReader.call(this, value);
		}
		return this.from(value);
	});
};
