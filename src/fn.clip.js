(function(PaperDuck) {

	PaperDuck.fn.clip = function(offsetX, offsetY, sizeX, sizeY) {
		sizeX = parseInt(sizeX);
		sizeY = parseInt(sizeY);
		if (sizeX === 0 || sizeY === 0) {
			//return this.constructor.empty(sizeX, sizeY);
		}
		offsetX = parseInt(offsetX);
		offsetY = parseInt(offsetY);
		var ctx = this.ctx;
		var canvas = ctx.canvas;
		var currSizeX = canvas.width;
		var currSizeY = canvas.height;
		if (sizeX < 0) {
			offsetX += sizeX;
			sizeX = -sizeX;
		}
		if (sizeY < 0) {
			offsetY += sizeY;
			sizeY = -sizeY;
		}
		if (offsetX === 0 && sizeX === currSizeX && offsetY === 0 && sizeY === currSizeY) {
			return this;
		}
		ctx = document.createElement('canvas').getContext('2d');
		ctx.canvas.width = sizeX;
		ctx.canvas.height = sizeY;
		console.log('clip', -offsetX, -offsetY, currSizeX, currSizeY);
		ctx.drawImage(canvas, -offsetX, -offsetY, currSizeX, currSizeY);
		return new this.constructor(ctx);
	};

}).call(this, PaperDuck);