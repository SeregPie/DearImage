export default function(source) {
	let sizeX = source.naturalWidth || source.width;
	let sizeY = source.naturalHeight || source.height;
	let ctx = this.blankContext(sizeX, sizeY);
	ctx.drawImage(source, 0, 0);
	return new this(ctx);
}
