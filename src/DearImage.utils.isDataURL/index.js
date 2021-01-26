import DataURL from '../@core/DataURL';
import DearImage from '../@core/DearImage';

import '../DearImage.utils';

DearImage.utils.isDataURL = function(value) {
	return DataURL.isValid(value);
};
