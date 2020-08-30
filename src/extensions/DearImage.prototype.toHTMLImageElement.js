import './DearImage.prototype.toDataURL';

import DearImage from '../core/DearImage';
import HTMLImageElement_create from '../core/HTMLImageElement/create';

DearImage.prototype.toHTMLImageElement = function(...args) {
	return HTMLImageElement_create(this.toDataURL(...args));
};
