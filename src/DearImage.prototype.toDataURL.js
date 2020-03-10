import DearImage from './DearImage';

DearImage.prototype.toDataURL = function(...args) {
	return this.canvas.toDataURL(...args);
};
