(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.PaperDuck = factory());
}(this, (function () { 'use strict';

	var defaultExport = function defaultExport(context) {
		this.context = context;
	};

	var prototypeAccessors = { canvas: { configurable: true },width: { configurable: true },height: { configurable: true } };

	prototypeAccessors.canvas.get = function () {
		return this.context.canvas;
	};

	prototypeAccessors.width.get = function () {
		return this.canvas.width;
	};

	prototypeAccessors.height.get = function () {
		return this.canvas.height;
	};

	Object.defineProperties( defaultExport.prototype, prototypeAccessors );

	function PaperDuck_createCanvas() {
		return document.createElement('canvas');
	}

	function PaperDuck_blankCanvas(sizeX, sizeY) {
		if ( sizeX === void 0 ) sizeX = 0;
		if ( sizeY === void 0 ) sizeY = 0;

		var canvas  = PaperDuck_createCanvas();
		canvas.width = sizeX;
		canvas.height = sizeY;
		return canvas;
	}

	function PaperDuck_blankContext(sizeX, sizeY) {
		return PaperDuck_blankCanvas(sizeX, sizeY).getContext('2d');
	}

	function PaperDuck_blank(sizeX, sizeY) {
		return new defaultExport(PaperDuck_blankContext(sizeX, sizeY));
	}

	function fromImageSource(source) {
		var sizeX = source.naturalWidth || source.width;
		var sizeY = source.naturalHeight || source.height;
		var ctx = this.blankContext(sizeX, sizeY);
		ctx.drawImage(source, 0, 0);
		return new this(ctx);
	}

	defaultExport.from = function(value) {
		return fromImageSource.call(this, value);
	};

	function Promise_try(func) {
		return new Promise(function (resolve) {
			resolve(func());
		});
	}

	function String_isString(value) {
		return typeof value === 'string';
	}

	function loadFileReader(reader) {
		var this$1 = this;

		return Promise_try(function () {
			if (reader.readyState > 1) {
				return this$1.load(reader.result);
			}
			var loadHandler;
			var errorHandler;
			return new Promise(function (resolve, reject) {
				loadHandler = resolve;
				errorHandler = reject;
				reader.addEventListener('load', loadHandler);
				reader.addEventListener('error', errorHandler);
			}).finally(function () {
				reader.removeEventListener('load', loadHandler);
				reader.removeEventListener('error', errorHandler);
			}).then(function () {
				return this$1.load(reader.result);
			});
		});
	}

	function loadFile(file) {
		var this$1 = this;

		return Promise_try(function () {
			var reader = new FileReader();
			reader.readAsDataURL(file);
			return loadFileReader.call(this$1, reader);
		});
	}

	function loadImage(image) {
		var this$1 = this;

		return Promise_try(function () {
			if (image.complete) {
				return this$1.from(image);
			}
			var loadHandler;
			var errorHandler;
			return new Promise(function (resolve, reject) {
				loadHandler = resolve;
				errorHandler = reject;
				image.addEventListener('load', loadHandler);
				image.addEventListener('error', errorHandler);
			}).finally(function () {
				image.removeEventListener('load', loadHandler);
				image.removeEventListener('error', errorHandler);
			}).then(function () {
				return this$1.from(image);
			});
		});
	}

	function loadInputElement(element) {
		var this$1 = this;

		return Promise_try(function () {
			if (element.type === 'file') {
				return loadFile.call(this$1, element.files[0]);
			}
			return this$1.load(element.value);
		});
	}

	function loadString(string) {
		var this$1 = this;

		return Promise_try(function () {
			var image = new Image();
			image.crossOrigin = 'anonymous';
			image.src = string;
			return loadImage.call(this$1, image);
		});
	}

	defaultExport.load = function(value) {
		var this$1 = this;

		return Promise_try(function () {
			if (String_isString(value)) {
				return loadString.call(this$1, value);
			}
			if (value instanceof HTMLImageElement) {
				return loadImage.call(this$1, value);
			}
			if (value instanceof HTMLInputElement) {
				return loadInputElement.call(this$1, value);
			}
			if (value instanceof File) {
				return loadFile.call(this$1, value);
			}
			if (value instanceof FileReader) {
				return loadFileReader.call(this$1, value);
			}
			return this$1.from(value);
		});
	};

	function Lang_isUndefined(value) {
		return value === undefined;
	}

	function PaperDuck_clip(instance, offsetX, offsetY, sizeX, sizeY) {
		if ( offsetX === void 0 ) offsetX = 0;
		if ( offsetY === void 0 ) offsetY = 0;

		sizeX = Number.parseInt(sizeX);
		sizeY = Number.parseInt(sizeY);
		var currSizeX = instance.width;
		var currSizeY = instance.height;
		if (offsetX < 0) {
			offsetX += currSizeX;
		}
		if (offsetY < 0) {
			offsetY += currSizeY;
		}
		if (Lang_isUndefined(sizeX)) {
			sizeX = currSizeX;
		} else if (sizeX < 0) {
			sizeX = -sizeX;
			offsetX -= sizeX;
		}
		if (Lang_isUndefined(sizeY)) {
			sizeY = currSizeY;
		} else if (sizeY < 0) {
			sizeY = -sizeY;
			offsetY -= sizeY;
		}
		if (offsetX === 0 && offsetY === 0 && sizeX === currSizeX && sizeY === currSizeY) {
			return instance;
		}
		if (sizeX === 0 || sizeY === 0) {
			return PaperDuck_blank(sizeX, sizeY);
		}
		var ctx = PaperDuck_blankContext(sizeX, sizeY);
		ctx.drawImage(instance.canvas, -offsetX, -offsetY);
		return new defaultExport(ctx);
	}

	function func(instance, flipX, flipY) {
		var sizeX = instance.width;
		var sizeY = instance.height;
		if (sizeX === 0 || sizeY === 0) {
			return instance;
		}
		var ctx = PaperDuck_blankContext(sizeX, sizeY);
		ctx.save();
		ctx.translate(
			flipX ? sizeX : 0,
			flipY ? sizeY : 0
		);
		ctx.scale(
			flipX ? -1 : 1,
			flipY ? -1 : 1
		);
		ctx.drawImage(instance.canvas, 0, 0);
		ctx.restore();
		return new defaultExport(ctx);
	}

	function PaperDuck_flip(instance) {
		return func(instance, false, true);
	}

	function PaperDuck_flop(instance) {
		return func(instance, true, false);
	}

	function PaperDuck_rotate180(instance) {
		return func(instance, true, true);
	}

	function func$1(instance, counterclockwise) {
		var sizeX = instance.height;
		var sizeY = instance.width;
		if (sizeX === 0 || sizeY === 0) {
			if (sizeX === sizeY) {
				return this;
			}
			return PaperDuck_blank(sizeX, sizeY);
		}
		var ctx = PaperDuck_blankContext(sizeX, sizeY);
		ctx.save();
		ctx.translate(sizeX / 2, sizeY / 2);
		ctx.rotate(Math.PI / (counterclockwise ? -2 : 2));
		ctx.drawImage(instance.canvas, sizeY / -2, sizeX / -2);
		ctx.restore();
		return new defaultExport(ctx);
	}

	function PaperDuck_rotate270(instance) {
		return func$1(instance, true);
	}

	function PaperDuck_rotate90(instance) {
		return func$1(instance, false);
	}

	var Function_contextWithFirstArg = function(func) {
		return function() {
			var args = [], len = arguments.length;
			while ( len-- ) args[ len ] = arguments[ len ];

			return func.apply(void 0, [ this ].concat( args ));
		};
	};
	Object.assign(defaultExport, {
		blank: PaperDuck_blank,
		blankCanvas: PaperDuck_blankCanvas,
		blankContext: PaperDuck_blankContext,
		createCanvas: PaperDuck_createCanvas,
	});
	//import './PaperDuck.resize';
	Object.assign(defaultExport.prototype, {
		clip: Function_contextWithFirstArg(PaperDuck_clip),
		flip: Function_contextWithFirstArg(PaperDuck_flip),
		flop: Function_contextWithFirstArg(PaperDuck_flop),
		rotate180: Function_contextWithFirstArg(PaperDuck_rotate180),
		rotate270: Function_contextWithFirstArg(PaperDuck_rotate270),
		rotate90: Function_contextWithFirstArg(PaperDuck_rotate90),
	});

	return defaultExport;

})));
