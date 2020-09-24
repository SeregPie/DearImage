import DearImage from '../@core/DearImage';

DearImage.prototype.toDataURL = function(...args) {
	let {canvas} = this;
	return canvas.toDataURL(...args);
};
