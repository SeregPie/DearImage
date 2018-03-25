import PaperDuck from '../PaperDuck';

PaperDuck.prototype.cropAlign = function(sizeX, sizeY, align) {
	sizeX = Number.parseInt(sizeX);
	sizeY = Number.parseInt(sizeY);
	let currSizeX = this.getWidth();
	let currSizeY = this.getHeight();
	if (Number.isNaN(sizeX)) {
		sizeX = currSizeX;
	} else {
		sizeX = Math.abs(sizeX);
		sizeX = Math.min(sizeX, currSizeX);
	}
	if (Number.isNaN(sizeY)) {
		sizeY = currSizeY;
	} else {
		sizeY = Math.abs(sizeY);
		sizeY = Math.min(sizeY, currSizeY);
	}
	return this.clipAlign(sizeX, sizeY, align);
};