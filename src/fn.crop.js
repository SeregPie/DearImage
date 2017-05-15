(function(PaperDuck) {

	PaperDuck.fn.crop = function(offsetX, offsetY, sizeX, sizeY) {
		offsetX = parseInt(offsetX);
		offsetY = parseInt(offsetY);
		sizeX = parseInt(sizeX);
		sizeY = parseInt(sizeY);
		var ctx = this.ctx;
		var currSizeX = ctx.canvas.width;
		var currSizeY = ctx.canvas.height;
		if (isNaN(offsetX)) {
			offsetX = 0;
		} else if (offsetX < 0) {
			offsetX = Math.max(offsetX + currSizeX, 0);
		} else {
			offsetX = Math.min(offsetX, currSizeX);
		}
		if (isNaN(offsetY)) {
			offsetY = 0;
		} else if (offsetY < 0) {
			offsetY = Math.max(offsetY + currSizeY, 0);
		} else {
			offsetY = Math.min(offsetY, currSizeY);
		}
		if (isNaN(sizeX)) {
			sizeX = currSizeX - offsetX;
		} else if (sizeX < 0) {
			sizeX = Math.min(-sizeX, offsetX);
			offsetX -= sizeX;
		} else {
			sizeX = Math.min(sizeX, currSizeX - offsetX);
		}
		if (isNaN(sizeY)) {
			sizeY = currSizeY - offsetY;
		} else if (sizeY < 0) {
			sizeY = Math.min(-sizeY, offsetY);
			offsetY -= sizeY;
		} else {
			sizeY = Math.min(sizeY, currSizeY - offsetY);
		}
		if (sizeX === currSizeX && sizeY === currSizeY) {
			return this;
		}
		if (sizeX === 0 || sizeY === 0) {
			return this.constructor.blank(sizeX, sizeY);
		}
		var canvas = ctx.canvas;
		ctx = document.createElement('canvas').getContext('2d');
		ctx.canvas.width = sizeX;
		ctx.canvas.height = sizeY;
		ctx.drawImage(canvas, offsetX, offsetY, sizeX, sizeY, 0, 0, sizeX, sizeY);
		return new this.constructor(ctx);
	};

}).call(this, PaperDuck);