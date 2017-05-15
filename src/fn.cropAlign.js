(function(PaperDuck) {

	PaperDuck.fn.cropAlign = function(sizeX, sizeY, align) {
		sizeX = parseInt(sizeX);
		sizeY = parseInt(sizeY);
		var currSizeX = this.getWidth();
		var currSizeY = this.getHeight();
		if (isNaN(sizeX)) {
			sizeX = currSizeX;
		} else {
			sizeX = Math.abs(sizeX);
			sizeX = Math.min(sizeX, currSizeX);
		}
		if (isNaN(sizeY)) {
			sizeY = currSizeY;
		} else {
			sizeY = Math.abs(sizeY);
			sizeY = Math.min(sizeY, currSizeY);
		}
		if (sizeX === currSizeX && sizeY === currSizeY) {
			return this;
		}
		if (sizeX === 0 || sizeY === 0) {
			return this.constructor.blank(sizeX, sizeY);
		}
		align = (''+align)
			.toLowerCase()
			.split(/[^a-z0-9]+/)
			.sort()
			.filter((function() {
				var prevValue = null;
				return function(value) {
					return prevValue !== value && (prevValue = value);
				};
			})())
			.filter((function() {
				var validValues = ['bottom', 'left', 'right', 'top'];
				return function(value) {
					return validValues.indexOf(value) >= 0;
				};
			})())
			.join(' ');
		switch (align) {
			case 'left top':
				return this.crop(0, 0, sizeX, sizeY);
			case 'right top':
				return this.crop(-sizeX, 0, Infinity, sizeY);
			case 'bottom left':
				return this.crop(0, -sizeY, sizeX, Infinity);
			case 'bottom right':
				return this.crop(-sizeX, -sizeY, Infinity, Infinity);
			case 'left':
				return this.crop(0, Math.max((currSizeY - sizeY) / 2, 0), sizeX, sizeY);
			case 'right':
				return this.crop(-sizeX, Math.max((currSizeY - sizeY) / 2, 0), Infinity, sizeY);
			case 'top':
				return this.crop(Math.max((currSizeX - sizeX) / 2, 0), 0, sizeX, sizeY);
			case 'bottom':
				return this.crop(Math.max((currSizeX - sizeX) / 2, 0), -sizeY, sizeX, Infinity);
		}
		return this.crop(Math.max((currSizeX - sizeX) / 2, 0), Math.max((currSizeY - sizeY) / 2, 0), sizeX, sizeY);
	};

}).call(this, PaperDuck);