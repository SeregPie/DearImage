import PaperDuck from '../PaperDuck';

PaperDuck.prototype.clipAlign = function(sizeX, sizeY, align) {
	sizeX = Number.parseInt(sizeX);
	sizeY = Number.parseInt(sizeY);
	let currSizeX = this.getWidth();
	let currSizeY = this.getHeight();
	if (Number.isNaN(sizeX)) {
		sizeX = currSizeX;
	} else {
		sizeX = Math.abs(sizeX);
	}
	if (Number.isNaN(sizeY)) {
		sizeY = currSizeY;
	} else {
		sizeY = Math.abs(sizeY);
	}
	if (sizeX === currSizeX && sizeY === currSizeY) {
		return this;
	}
	if (sizeX === 0 || sizeY === 0) {
		if (sizeX === sizeY) {
			return this;
		}
		return this.constructor.blank(sizeX, sizeY);
	}
	align = (''+align)
		.toLowerCase()
		.split(/[^a-z0-9]+/)
		.sort()
		.filter((function() {
			let prevValue = null;
			return function(value) {
				return prevValue !== value && (prevValue = value);
			};
		})())
		.filter((function() {
			let validValues = ['bottom', 'left', 'right', 'top'];
			return function(value) {
				return validValues.indexOf(value) >= 0;
			};
		})())
		.join(' ');
	switch (align) {
		case 'left top':
			return this.clip(0, 0, sizeX, sizeY);
		case 'right top':
			return this.clip(-sizeX, 0, sizeX, sizeY);
		case 'bottom left':
			return this.clip(0, -sizeY, sizeX, sizeY);
		case 'bottom right':
			return this.clip(-sizeX, -sizeY, sizeX, sizeY);
		case 'left':
			return this.clip(0, (currSizeY + sizeY) / 2, sizeX, -sizeY);
		case 'right':
			return this.clip(-sizeX, (currSizeY + sizeY) / 2, sizeX, -sizeY);
		case 'top':
			return this.clip((currSizeX + sizeX) / 2, 0, -sizeX, sizeY);
		case 'bottom':
			return this.clip((currSizeX + sizeX) / 2, -sizeY, -sizeX, sizeY);
	}
	return this.clip((currSizeX + sizeX) / 2, (currSizeY + sizeY) / 2, -sizeX, -sizeY);
};