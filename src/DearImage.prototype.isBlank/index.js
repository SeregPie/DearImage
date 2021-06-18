import '../DearImage.prototype.toImageData';
import DearImage from '../DearImage';

import symbol from './symbol';

DearImage.prototype.isBlank = function() {
	let result = this[symbol];
	if (result === undefined) {
		let {
			sizeX,
			sizeY,
		} = this;
		result = !(sizeX && sizeY && this.toImageData().data.some(x => x));
		this[symbol] = result;
	}
	return result;
};
