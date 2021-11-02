import '../DearImage.prototype.flip';
import DearImage from '../DearImage';

DearImage.prototype.flip = function(flippingX, flippingY) {
	// todo: validate args
	if (flippingX || flippingY) {
		let {
			canvas: currentCanvas,
			sizeX,
			sizeY,
		} = this;
		let image = this.constructor.blank(sizeX, sizeY);
		let {context} = image;
		context.save();
		// todo: check other options
		context.translate(flippingX ? sizeX : 0, flippingY ? sizeY : 0);
		context.scale(flippingX ? -1 : 1, flippingY ? -1 : 1);
		context.drawImage(currentCanvas, 0, 0);
		context.restore();
		return image;
	}
	return this;
};
