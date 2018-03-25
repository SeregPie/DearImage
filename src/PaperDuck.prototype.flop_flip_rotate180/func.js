export default function(flipX, flipY) {
	let sizeX = this.width;
	let sizeY = this.height;
	if (sizeX === 0 || sizeY === 0) {
		return this;
	}
	let ctx = this.constructor.blankContext(sizeX, sizeY);
	ctx.save();
	ctx.translate(
		flipX ? sizeX : 0,
		flipY ? sizeY : 0,
	);
	ctx.scale(
		flipX ? -1 : 1,
		flipY ? -1 : 1,
	);
	ctx.drawImage(this.canvas, 0, 0);
	ctx.restore();
	return new this.constructor(ctx);
}
