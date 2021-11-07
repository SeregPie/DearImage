import DearImage from '../DearImage';

// todo: rename
import gjfcunbb from './gjfcunbb';

DearImage.from = async function(value) {
	if (value instanceof this) {
		return value;
	}
	let context = await gjfcunbb(value);
	return new this(context);
};
