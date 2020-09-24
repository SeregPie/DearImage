import '../DearImage.blank';

export default function(x, y) {
	let {
		canvas: currentCanvas,
		sizeX,
		sizeY,
	} = this;
	if (sizeX && sizeY) {
		let result = this.constructor.blank(sizeX, sizeY);
		let {context} = result;
		context.save();
		context.translate(x ? sizeX : 0, y ? sizeY : 0);
		context.scale(x ? -1 : 1, y ? -1 : 1);
		context.drawImage(currentCanvas, 0, 0);
		context.restore();
		return result;
	}
	return this;
}
