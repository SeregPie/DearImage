import DearImage from '../@core/DearImage';
import HTMLImageElement_create from '../@core/HTMLImageElement/create';

import '../DearImage.prototype.toDataURL';

DearImage.prototype.toHTMLImageElement = function(...args) {
	return HTMLImageElement_create(this.toDataURL(...args));
};
