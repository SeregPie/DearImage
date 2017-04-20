(function() {

	var URL = window.URL || window.webkitURL;



	var PaperDuck = function constructor(source) {
		if (!(this instanceof constructor)) {
			if (source instanceof constructor) {
				return source;
			}
			if (source && source.canvas instanceof HTMLCanvasElement) {
				source = source.canvas;
			}
			var ctx = document.createElement('canvas').getContext('2d');
			ctx.canvas.width = source.naturalWidth || source.width || 0;
			ctx.canvas.height = source.naturalHeight || source.height || 0;
			ctx.drawImage(source, 0, 0);
			return new constructor(ctx);
		}
		this._ctx = source;
	};

	PaperDuck.load = function(source) {
		return Promise.resolve().then(function() {
			if (source) {
				switch (typeof source) {
					case 'string': {
						var image = new Image();
						image.crossOrigin = 'anonymous';
						image.src = source;
						return this.load(image);
					}
					case 'object': {
						if (source instanceof HTMLImageElement) {
							if (source.complete) {
								return this(source);
							}
							return new Promise(function(resolve, reject) {
								source.addEventListener('load', function() {
									resolve(this(source));
								}.bind(this));
								source.addEventListener('error', function() {
									reject(source);
								});
							}.bind(this));
						}
						if (source instanceof HTMLInputElement) {
							if (source.type === 'file') {
								return this.load(source.files);
							}
							return this.load(source.value);
						}
						/*
						if (source instanceof Uint8Array) {
							//var blob = new Blob([file], { type: "image/png" });
							return this.load(new Blob([source]));
						} else
						if (source instanceof ArrayBuffer) {
							this.load(new Uint8Array(source));
						}
						*/
						if (source instanceof File) {
							var reader  = new FileReader();
							reader.readAsDataURL(source);
							return this.load(reader);
						}
						/*
						if (source instanceof Blob) {
							var urlObject = URL.createObjectURL(source);
							var image = new Image();
							image.src = urlObject;
							callback(this(image));
							URL.revokeObjectURL(urlObject);
						}
						*/
						if (source instanceof FileReader) {
							if (source.readyState > 1) {
								return this.load(source.result);
							}
							return new Promise(function(resolve, reject) {
								source.addEventListener('load', function() {
									this.load(source.result).then(resolve, reject);
								}.bind(this));
								source.addEventListener('error', function() {
									reject(source);
								});
							}.bind(this));
						}
						if (typeof source.length === 'number' && (source.length - 1) in source) {
							return this.load(source[0]);
						}
						break;
					}
				}
			}
			return this(source);
		}.bind(this));
	};

	PaperDuck.blank = function(sizeX, sizeY) {
		sizeX = parseInt(sizeX);
		sizeY = parseInt(sizeY);
		if (isNaN(sizeX)) {
			sizeX = 0;
		} else {
			sizeX = Math.abs(sizeX);
		}
		if (isNaN(sizeY)) {
			sizeY = 0;
		} else {
			sizeY = Math.abs(sizeY);
		}
		var ctx = document.createElement('canvas').getContext('2d');
		ctx.canvas.width = sizeX;
		ctx.canvas.height = sizeY;
		return new this(ctx);
	};

	PaperDuck.fn = PaperDuck.prototype = {
		constructor: PaperDuck,

		getWidth: function() {
			return this._ctx.canvas.width;
		},

		getHeight: function() {
			return this._ctx.canvas.height;
		},

		resize: function(sizeX, sizeY, smoothing) {
			sizeX = parseInt(sizeX);
			sizeY = parseInt(sizeY);
			if (isNaN(sizeX) && isNaN(sizeY)) {
				return this;
			}
			if (!isNaN(sizeX)) {
				sizeX = Math.abs(sizeX);
			}
			if (!isNaN(sizeY)) {
				sizeY = Math.abs(sizeY);
			}
			var ctx = this._ctx;
			var currSizeX = ctx.canvas.width;
			var currSizeY = ctx.canvas.height;
			if (isNaN(sizeX)) {
				if (currSizeY === 0) {
					return this.constructor.blank(0, sizeY);
				}
				sizeX = Math.round(currSizeX * sizeY / currSizeY);
			} else
			if (isNaN(sizeY)) {
				if (currSizeX === 0) {
					return this.constructor.blank(sizeX, 0);
				}
				sizeY = Math.round(currSizeY * sizeX / currSizeX);
			}
			if (sizeX === currSizeX && sizeY === currSizeY) {
				return this;
			}
			if (currSizeX === 0 || currSizeY === 0 || sizeX === 0 || sizeY === 0) {
				return this.constructor.blank(sizeX, sizeY);
			}
			smoothing = parseInt(smoothing);
			if (isNaN(smoothing)) {
				smoothing = 2;
			} else
			if (smoothing > 1) {
				smoothing /= smoothing - 1;
			} else {
				smoothing = Infinity;
			}
			var resizeContext = function(ctx, sizeX, sizeY) {
				var canvas = ctx.canvas;
				ctx = document.createElement('canvas').getContext('2d');
				ctx.canvas.width = sizeX;
				ctx.canvas.height = sizeY;
				ctx.scale(sizeX / canvas.width, sizeY / canvas.height);
				ctx.drawImage(canvas, 0, 0);
				return ctx;
			};
			var b;
			var f = function(currSize, finalSize) {
				if (currSize < finalSize) {
					currSize = Math.min(Math.round(currSize * smoothing), finalSize);
				} else
				if (currSize > finalSize) {
					currSize = Math.max(Math.round(currSize / smoothing), finalSize);
				} else {
					return finalSize;
				}
				b = false;
				return currSize;
			};
			for (var i = 64; i-- > 0;) {
				b = true;
				currSizeX = f(currSizeX, sizeX);
				currSizeY = f(currSizeY, sizeY);
				if (b) break;
				ctx = resizeContext(ctx, currSizeX, currSizeY);
			}
			return new this.constructor(ctx);
		},

		clip: function(offsetX, offsetY, sizeX, sizeY) {
			/*
			sizeX = parseInt(sizeX);
			sizeY = parseInt(sizeY);
			if (sizeX === 0 || sizeY === 0) {
				//return this.constructor.empty(sizeX, sizeY);
			}
			offsetX = parseInt(offsetX);
			offsetY = parseInt(offsetY);
			var ctx = this._ctx;
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
			*/
		},

		crop: function(offsetX, offsetY, sizeX, sizeY) {
			offsetX = parseInt(offsetX);
			offsetY = parseInt(offsetY);
			sizeX = parseInt(sizeX);
			sizeY = parseInt(sizeY);
			var ctx = this._ctx;
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
		},

		clipAlign: function(sizeX, sizeY, align) {

		},

		cropAlign: function(sizeX, sizeY, align) {
			sizeX = parseInt(sizeX);
			sizeY = parseInt(sizeY);
			var currSizeX = this.getWidth();
			var currSizeY = this.getHeight();
			if (isNaN(sizeX)) {
				sizeX = currSizeX;
			} else {
				sizeX = Math.min(Math.abs(sizeX), currSizeX);
			}
			if (isNaN(sizeY)) {
				sizeY = currSizeY;
			} else {
				sizeY = Math.min(Math.abs(sizeY), currSizeY);
			}
			if (sizeX === 0 || sizeY === 0) {
				return this.constructor.blank(sizeX, sizeY);
			}
			if (sizeX === currSizeX && sizeY === currSizeY) {
				return this;
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
				case 'center left':
					return this.crop(0, Math.max((currSizeY - sizeY) / 2, 0), sizeX, sizeY);
				case 'center right':
					return this.crop(-sizeX, Math.max((currSizeY - sizeY) / 2, 0), Infinity, sizeY);
				case 'center top':
					return this.crop(Math.max((currSizeX - sizeX) / 2, 0), 0, sizeX, sizeY);
				case 'bottom center':
					return this.crop(Math.max((currSizeX - sizeX) / 2, 0), -sizeY, sizeX, Infinity);
			}
			return this.crop(Math.max((currSizeX - sizeX) / 2, 0), Math.max((currSizeY - sizeY) / 2, 0), sizeX, sizeY);
		},

		scale: function(factor, smoothing) {
			factor = parseFloat(factor);
			if (isNaN(factor)) {
				return this;
			}
			factor = Math.abs(factor);
			return this.resize(this.getWidth() * factor, this.getHeight() * factor, smoothing);
		},

		zoom: function(offsetX, offsetY, factor, smoothing) {
			// ???
		},

		scaleMin: function(sizeX, sizeY, smoothing) {
			sizeX = parseInt(sizeX);
			sizeY = parseInt(sizeY);
			var currSizeX = this.getWidth();
			var currSizeY = this.getHeight();
			if (isNaN(sizeX)) {
				sizeX = currSizeX;
			} else {
				sizeX = Math.abs(sizeX);
			}
			if (isNaN(sizeY)) {
				sizeY = currSizeY;
			} else {
				sizeY = Math.abs(sizeY);
			}
			if (sizeX === currSizeX && sizeY === currSizeY) {
				return this;
			}
			if (currSizeX === 0 || currSizeY === 0 || sizeX === 0 || sizeY === 0) {
				return this.constructor.blank(sizeX, sizeY);
			}
			var scaleFactorX = sizeX / currSizeX;
			var scaleFactorY = sizeY / currSizeY;
			var scaleFactor = Math.min(scaleFactorX, scaleFactorY);
			return this.scale(scaleFactor, smoothing);
		},

		scaleMax: function(sizeX, sizeY, smoothing) {
			sizeX = parseInt(sizeX);
			sizeY = parseInt(sizeY);
			var currSizeX = this.getWidth();
			var currSizeY = this.getHeight();
			if (isNaN(sizeX)) {
				sizeX = currSizeX;
			} else {
				sizeX = Math.abs(sizeX);
			}
			if (isNaN(sizeY)) {
				sizeY = currSizeY;
			} else {
				sizeY = Math.abs(sizeY);
			}
			if (sizeX === currSizeX && sizeY === currSizeY) {
				return this;
			}
			if (currSizeX === 0 || currSizeY === 0 || sizeX === 0 || sizeY === 0) {
				return this.constructor.blank(sizeX, sizeY);
			}
			var scaleFactorX = sizeX / currSizeX;
			var scaleFactorY = sizeY / currSizeY;
			var scaleFactor = Math.max(scaleFactorX, scaleFactorY);
			return this.scale(scaleFactor, smoothing);
		},

		scaleClip: function(sizeX, sizeY, align, smoothing) {
			return this.scaleMin(sizeX, sizeY, smoothing).clipAlign(sizeX, sizeY, align);
		},

		scaleCrop: function(sizeX, sizeY, align, smoothing) {
			return this.scaleMax(sizeX, sizeY, smoothing).cropAlign(sizeX, sizeY, align);
		},

		flip: function() {
			var canvas = this._ctx.canvas;
			var currSizeX = canvas.width;
			var currSizeY = canvas.height;
			if (currSizeX === 0 || currSizeY === 0) {
				return this;
			}
			var ctx = document.createElement('canvas').getContext('2d');
			ctx.canvas.width = currSizeX;
			ctx.canvas.height = currSizeY;
			ctx.translate(0, currSizeY);
			ctx.scale(1, -1);
			ctx.drawImage(canvas, 0, 0);
			return new this.constructor(ctx);
		},

		flop: function() {
			var canvas = this._ctx.canvas;
			var currSizeX = canvas.width;
			var currSizeY = canvas.height;
			if (currSizeX === 0 || currSizeY === 0) {
				return this;
			}
			var ctx = document.createElement('canvas').getContext('2d');
			ctx.canvas.width = currSizeX;
			ctx.canvas.height = currSizeY;
			ctx.translate(currSizeX, 0);
			ctx.scale(-1, 1);
			ctx.drawImage(canvas, 0, 0);
			return new this.constructor(ctx);
		},

		rotate90: function() {
			var canvas = this._ctx.canvas;
			var currSizeX = canvas.width;
			var currSizeY = canvas.height;
			if (currSizeX === 0 || currSizeY === 0) {
				if (currSizeX === currSizeY) {
					return this;
				}
				return this.constructor.blank(currSizeY, currSizeX);
			}
			var ctx = document.createElement('canvas').getContext('2d');
			ctx.canvas.width = currSizeY;
			ctx.canvas.height = currSizeX;
			ctx.translate((currSizeY / 2), (currSizeX / 2));
			ctx.rotate(Math.PI / 2);
			ctx.drawImage(canvas, -(currSizeX / 2), -(currSizeY / 2));
			return new this.constructor(ctx);
		},

		rotate180: function() {
			var canvas = this._ctx.canvas;
			var currSizeX = canvas.width;
			var currSizeY = canvas.height;
			if (currSizeX === 0 || currSizeY === 0) {
				return this;
			}
			var ctx = document.createElement('canvas').getContext('2d');
			ctx.canvas.width = currSizeX;
			ctx.canvas.height = currSizeY;
			ctx.translate(currSizeX, currSizeY);
			ctx.scale(-1, -1);
			ctx.drawImage(canvas, 0, 0);
			return new this.constructor(ctx);
		},

		rotate270: function() {
			var canvas = this._ctx.canvas;
			var currSizeX = canvas.width;
			var currSizeY = canvas.height;
			if (currSizeX === 0 || currSizeY === 0) {
				if (currSizeX === currSizeY) {
					return this;
				}
				return this.constructor.blank(currSizeY, currSizeX);
			}
			var ctx = document.createElement('canvas').getContext('2d');
			ctx.canvas.width = currSizeY;
			ctx.canvas.height = currSizeX;
			ctx.translate((currSizeY / 2), (currSizeX / 2));
			ctx.rotate(Math.PI / -2);
			ctx.drawImage(canvas, (currSizeX / -2), (currSizeY / -2));
			return new this.constructor(ctx);
		},

		toImage: function() {
			var image = new Image();
			image.src = this.toDataURL.apply(this, arguments);
			return image;
		},

		toImageData: function() {
			// ???
		},

		toCanvas: function() {
			return this.toContext().canvas;
		},

		toContext: function() {
			var canvas = this._ctx.canvas;
			var ctx = document.createElement('canvas').getContext('2d');
			ctx.canvas.width = canvas.width;
			ctx.canvas.height = canvas.height;
			ctx.drawImage(canvas, 0, 0);
			return ctx;
		},

		toDataURL: function() {
			var canvas = this._ctx.canvas;
			return canvas.toDataURL.apply(canvas, arguments);
		},
	};



	this.PaperDuck = PaperDuck;

}).call(this);