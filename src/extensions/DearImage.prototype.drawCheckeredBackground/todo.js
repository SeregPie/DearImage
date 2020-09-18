import CanvasRenderingContext2D_create from '../../core/CanvasRenderingContext2D/create';
import DearImage from '../../core/DearImage';

DearImage.prototype.drawCheckeredBackground = function(options) {
	let {
		sizeX,
		sizeY,
	} = this;
	let colors;
	let aaa;
	let size = tilesCount * tileSize;
	let context = CanvasRenderingContext2D_create(size, size);
	colors.forEach(color => {
		if (color) {
			context.fillStyle = color;
			colors.forEach(() => {
				context.fillRect(0, 0, tileSize, tileSize);
			});
		}
	});
	return this.drawBackground(image, {repeat: true});
};
