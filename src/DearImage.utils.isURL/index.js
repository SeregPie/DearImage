import '../DearImage.utils';

import DearImage from '../@core/DearImage';
import URL_is from '../@core/URL/is';
import URL_isString from '../@core/URL/isString';

DearImage.utils.isURL = function(value) {
	return URL_is(value) || URL_isString(value);
};
