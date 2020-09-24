import '../DearImage.blank';
import '../DearImage.drawed';

import DearImage from '../@core/DearImage';

export default function(b, image, options) {
	let {
		canvas: currentCanvas,
		sizeX,
		sizeY,
	} = this;
	if (sizeX && sizeY) {
		let result = this.constructor.blank(sizeX, sizeY);
		let {canvas} = DearImage.drawed(image, sizeX, sizeY, options);
		let {context} = result;
		if (b) {
			context.drawImage(currentCanvas, 0, 0);
			context.drawImage(canvas, 0, 0);
		} else {
			context.drawImage(currentCanvas, 0, 0);
			context.drawImage(canvas, 0, 0);
		}
		return result;
	}
	return this;
}