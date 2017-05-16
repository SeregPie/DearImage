(function(PaperDuck) {

	PaperDuck.fn.clip = function(offsetX, offsetY, sizeX, sizeY) {
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
		}
		if (isNaN(offsetY)) {
			offsetY = 0;
		} else if (offsetY < 0) {
			offsetY += currSizeY;
		}
		if (isNaN(sizeX)) {
			sizeX = currSizeX;
		} else if (sizeX < 0) {
			sizeX = -sizeX;
			offsetX -= sizeX;
		}
		if (isNaN(sizeY)) {
			sizeY = currSizeY;
		} else if (sizeY < 0) {
			sizeY = -sizeY;
			offsetY -= sizeY;
		}
		if (offsetX === 0 && offsetY === 0 && sizeX === currSizeX && sizeY === currSizeY) {
			return this;
		}
		if (sizeX === 0 || sizeY === 0) {
			return this.constructor.blank(sizeX, sizeY);
		}
		var ctx = this.constructor.blankContext(sizeX, sizeY);
		ctx.drawImage(this.toCanvas(), -offsetX, -offsetY);
		return this.constructor.from(ctx);
	};

}).call(this, PaperDuck);