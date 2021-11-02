import '../DearImage.prototype.flip';
import DearImage from '../DearImage';

DearImage.prototype.rotate = function(angle) {
	// todo: validate args
	if (angle) {
		let {
			canvas: currentCanvas,
			sizeX: currentSizeX,
			sizeY: currentSizeY,
		} = this;
		let cosA = Math.abs(Math.cos(angle));
		let sinA = Math.abs(Math.sin(angle));
		let sizeX = Math.round((currentSizeX * cosA) + (currentSizeY * sinA));
		let sizeY = Math.round((currentSizeX * sinA) + (currentSizeY * cosA));
		let image = this.constructor.blank(sizeX, sizeY);
		let {context} = image;
		context.save();
		// todo: check other options
		context.translate(sizeX / 2, sizeY / 2);
		context.rotate(angle);
		context.drawImage(currentCanvas, -currentSizeX / 2, -currentSizeY / 2);
		context.restore();
		return image;
	}
	return this;
};
