export default function(counterclockwise) {
	let sizeX = this.height;
	let sizeY = this.width;
	if (sizeX === 0 || sizeY === 0) {
		if (sizeX === sizeY) {
			return this;
		}
		return this.constructor.blank(sizeX, sizeY);
	}
	let ctx = this.constructor.blankContext(sizeX, sizeY);
	ctx.save();
	ctx.translate(sizeX / 2, sizeY / 2);
	ctx.rotate(Math.PI / (counterclockwise ? -2 : 2));
	ctx.drawImage(this.canvas, sizeY / -2, sizeX / -2);
	ctx.restore();
	return new this.constructor(ctx);
}
