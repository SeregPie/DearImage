import DearImage from '../DearImage';

// todo: rename
import gjfcunbb from './gjfcunbb';

DearImage.from = function(value) {
	if (this.is(value)) {
		return value;
	}
	let context = gjfcunbb(value);
	return new this(context);
};
