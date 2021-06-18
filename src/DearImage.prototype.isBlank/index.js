import '../DearImage.prototype.toImageData';
import DearImage from '../DearImage';

import once from '../utils/once';

function f() {
	let {
		sizeX,
		sizeY,
	} = this;
	return !(sizeX && sizeY && this.toImageData().data.some(x => x));
}

DearImage.prototype.isBlank = once(f);
