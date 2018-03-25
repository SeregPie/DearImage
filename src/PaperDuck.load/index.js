import Promise_try from 'x/src/Promise/try';
import String_isString from 'x/src/String/isString';

import PaperDuck from '../PaperDuck';

import loadImage from './loadImage';
import loadString from './loadString';

PaperDuck.load = function(value) {
	return Promise_try(() => {
		if (String_isString(value)) {
			return loadString.call(this, value);
		}
		if (value instanceof HTMLImageElement) {
			return loadImage.call(this, value);
		}
	});
};
