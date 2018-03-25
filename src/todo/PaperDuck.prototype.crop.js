import PaperDuck from '../PaperDuck';

PaperDuck.prototype.crop = function(offsetX, offsetY, sizeX, sizeY) {
	offsetX = Number.parseInt(offsetX);
	offsetY = Number.parseInt(offsetY);
	sizeX = Number.parseInt(sizeX);
	sizeY = Number.parseInt(sizeY);
	let currSizeX = this.getWidth();
	let currSizeY = this.getHeight();
	if (Number.isNaN(offsetX)) {
		offsetX = 0;
	} else if (offsetX < 0) {
		offsetX += currSizeX;
		offsetX = Math.max(offsetX, 0);
	} else {
		offsetX = Math.min(offsetX, currSizeX);
	}
	if (Number.isNaN(offsetY)) {
		offsetY = 0;
	} else if (offsetY < 0) {
		offsetY += currSizeY;
		offsetY = Math.max(offsetY, 0);
	} else {
		offsetY = Math.min(offsetY, currSizeY);
	}
	if (Number.isNaN(sizeX)) {
		sizeX = currSizeX - offsetX;
	} else if (sizeX < 0) {
		sizeX = -sizeX;
		sizeX = Math.min(sizeX, offsetX);
		offsetX -= sizeX;
	} else {
		sizeX = Math.min(sizeX, currSizeX - offsetX);
	}
	if (Number.isNaN(sizeY)) {
		sizeY = currSizeY - offsetY;
	} else if (sizeY < 0) {
		sizeY = -sizeY;
		sizeY = Math.min(sizeY, offsetY);
		offsetY -= sizeY;
	} else {
		sizeY = Math.min(sizeY, currSizeY - offsetY);
	}
	return this.clip(offsetX, offsetY, sizeX, sizeY);
};