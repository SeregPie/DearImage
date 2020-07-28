import '../DearImage.blank';
import DearImage from '../DearImage';

import computeSize from './computeSize';
import normalizeAngle from './normalizeAngle';

DearImage.prototype.rotate = function(angle) {
	angle = normalizeAngle(angle);
	let {
		canvas,
		sizeX: oldSizeX,
		sizeY: oldSizeY,
	} = this;
	if (angle && (oldSizeX || oldSizeY)) {
		let [
			newSizeX,
			newSizeY,
		] = computeSize(oldSizeX, oldSizeY, angle);
		let result = this.constructor.blank(newSizeX, newSizeY);
		if (newSizeX && newSizeY) {
			let {context} = result;
			context.save();
			context.translate(+newSizeX/2, +newSizeY/2);
			context.rotate(angle);
			context.drawImage(canvas, -oldSizeX/2, -oldSizeY/2);
			context.restore();
		}
		return result;
	}
	return this;
};
