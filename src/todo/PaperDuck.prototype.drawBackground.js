import PaperDuck from '../PaperDuck';

PaperDuck.prototype.drawBackground = function(background, align) {
	let sizeX = this.getWidth();
	let sizeY = this.getHeight();
	if (sizeX === 0 || sizeY === 0) {
		return this;
	}
	let backgroundCanvas = this.constructor
		.from(background)
		.clipAlign(sizeX, sizeY, align)
		.toCanvas();
	let ctx = this.constructor.blankContext(sizeX, sizeY);
	ctx.drawImage(backgroundCanvas, 0, 0);
	ctx.drawImage(this.toCanvas(), 0, 0);
	return this.constructor.from(ctx);
};