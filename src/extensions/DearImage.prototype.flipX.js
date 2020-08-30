import CanvasRenderingContext2D_create from '../core/CanvasRenderingContext2D/create';
import DearImage from '../core/DearImage';
import Function_prototype_bindPartial from '../core/Function/prototype/bindPartial';

let func = function(x, y) {
	let {
		canvas: currentCanvas,
		sizeX,
		sizeY,
	} = this;
	if (sizeX && sizeY) {
		let context = CanvasRenderingContext2D_create(sizeX, sizeY);
		context.save();
		context.translate(x ? sizeX : 0, y ? sizeY : 0);
		context.scale(x ? -1 : 1, y ? -1 : 1);
		context.drawImage(currentCanvas, 0, 0);
		context.restore();
		return new this.constructor(context);
	}
	return this;
};

Object.assign(DearImage.prototype, {
	flipX: Function_prototype_bindPartial(func, true, false),
	flipY: Function_prototype_bindPartial(func, false, true),
});
