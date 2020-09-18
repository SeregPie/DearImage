import '../DearImage.utils';

import DataURL from '../../core/DataURL';
import DearImage from '../../core/DearImage';

DearImage.utils.isDataURL = function(value) {
	return DataURL.isString(value);
};
