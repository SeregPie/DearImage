import './DearImage.utils';
import DearImage from './DearImage';

import DataURL from './core/DataURL';

DearImage.utils.isDataURL = function(value) {
	return DataURL.is(value) || DataURL.isString(value);
};
