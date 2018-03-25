import PaperDuck from '../PaperDuck';

PaperDuck.prototype.drawForeground = function(foreground, align) {
	let sizeX = this.getWidth();
	let sizeY = this.getHeight();
	if (sizeX === 0 || sizeY === 0) {
		return this;
	}
	let foregroundCanvas = this.constructor
		.from(foreground)
		.clipAlign(sizeX, sizeY, align)
		.toCanvas();
	let ctx = this.constructor.blankContext(sizeX, sizeY);
	ctx.drawImage(this.toCanvas(), 0, 0);
	ctx.drawImage(foregroundCanvas, 0, 0);
	return this.constructor.from(ctx);
};