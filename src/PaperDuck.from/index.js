import PaperDuck from '../PaperDuck';

import fromImageSource from './fromImageSource';

PaperDuck.from = function(value) {
	return fromImageSource.call(this, value);
};
