import PaperDuck from '../PaperDuck';

PaperDuck.prototype.toContext = function() {
	let ctx = this.constructor.blankContext(this.getWidth(), this.getHeight());
	ctx.drawImage(this.canvas, 0, 0);
	return ctx;
};