(function(PaperDuck) {

	PaperDuck.fn.crop = function(offsetX, offsetY, sizeX, sizeY) {
		offsetX = parseInt(offsetX);
		offsetY = parseInt(offsetY);
		sizeX = parseInt(sizeX);
		sizeY = parseInt(sizeY);
		var currSizeX = this.getWidth();
		var currSizeY = this.getHeight();
		if (isNaN(offsetX)) {
			offsetX = 0;
		} else if (offsetX < 0) {
			offsetX += currSizeX;
			offsetX = Math.max(offsetX, 0);
		} else {
			offsetX = Math.min(offsetX, currSizeX);
		}
		if (isNaN(offsetY)) {
			offsetY = 0;
		} else if (offsetY < 0) {
			offsetY += currSizeY;
			offsetY = Math.max(offsetY, 0);
		} else {
			offsetY = Math.min(offsetY, currSizeY);
		}
		if (isNaN(sizeX)) {
			sizeX = currSizeX - offsetX;
		} else if (sizeX < 0) {
			sizeX = -sizeX;
			sizeX = Math.min(sizeX, offsetX);
			offsetX -= sizeX;
		} else {
			sizeX = Math.min(sizeX, currSizeX - offsetX);
		}
		if (isNaN(sizeY)) {
			sizeY = currSizeY - offsetY;
		} else if (sizeY < 0) {
			sizeY = -sizeY;
			sizeY = Math.min(sizeY, offsetY);
			offsetY -= sizeY;
		} else {
			sizeY = Math.min(sizeY, currSizeY - offsetY);
		}
		return this.clip(offsetX, offsetY, sizeX, sizeY);
	};

}).call(this, PaperDuck);