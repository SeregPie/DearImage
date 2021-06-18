import '../DearImage.prototype.toImageData';
import DearImage from '../DearImage';

import eopomwyzwcqh from '../utils/eopomwyzwcqh';

function f() {
	let {
		sizeX,
		sizeY,
	} = this;
	return !(sizeX && sizeY && this.toImageData().data.some(x => x));
}

DearImage.prototype.isBlank = eopomwyzwcqh(f);
