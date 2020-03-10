import './DearImage.is';
import './DearImage.loadFrom';
import DearImage from './DearImage';

import Promise_try from './core/Promise/try';

DearImage.loadFromExcept = function(value) {
	return Promise_try(() => {
		return this.is(value) ? value : this.loadFrom(value);
	});
};
