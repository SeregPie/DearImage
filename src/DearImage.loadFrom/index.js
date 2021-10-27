import DearImage from '../DearImage';

// todo: rename
import jtskbfny from './jtskbfny';

DearImage.loadFrom = async function(value) {
	if (this.is(value)) {
		return value;
	}
	let context = await jtskbfny(value);
	return new this(context);
};
