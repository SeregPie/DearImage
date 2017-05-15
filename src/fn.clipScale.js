(function(PaperDuck) {

	PaperDuck.fn.clipScale = function(sizeX, sizeY, align, smoothing) {
		return this.scaleMin(sizeX, sizeY, smoothing).clipAlign(sizeX, sizeY, align);
	};

}).call(this, PaperDuck);