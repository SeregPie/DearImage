import './DearImage.prototype.toDataURL';
import DearImage from './DearImage';

import Image_createHTMLElement from './core/Image/createHTMLElement';

DearImage.prototype.toHTMLImageElement = function(...args) {
	let element = Image_createHTMLElement();
	element.src = this.toDataURL(...args);
	return element;
};
