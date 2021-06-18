import '../DearImage.prototype.toDataURL';
import DearImage from '../DearImage';

import createHTMLImageElement from '../utils/createHTMLImageElement';

DearImage.prototype.toHTMLImageElement = function(...args) {
	return createHTMLImageElement(this.toDataURL(...args));
};
