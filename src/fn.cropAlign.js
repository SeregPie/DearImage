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
		return this.clipAlign(sizeX, sizeY, align);
	};

})(PaperDuck);