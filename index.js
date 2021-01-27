(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.DearImage = factory());
}(this, (function () { 'use strict';

	function Canvas_createInNode(width, height) {
		try {
			let {Canvas} = require('canvas');
			return new Canvas(width, height);
		} catch {
			// pass
		}
		throw new Error('Canvas is not supported.');
	}

	function HTMLCanvasElement_create(width, height) {
		try {
			return Object.assign(document.createElement('canvas'), {width, height});
		} catch {
			// pass
		}
		throw new Error('HTMLCanvasElement is not supported.');
	}

	function OffscreenCanvas_create(width, height) {
		try {
			return new OffscreenCanvas(width, height);
		} catch {
			// pass
		}
		throw new Error('OffscreenCanvas is not supported.');
	}

	function Canvas_create(...args) {
		try {
			return HTMLCanvasElement_create(...args);
		} catch {
			// pass
		}
		try {
			return OffscreenCanvas_create(...args);
		} catch {
			// pass
		}
		return Canvas_createInNode(...args);
	}

	function CanvasRenderingContext2D_create(...args) {
		return Canvas_create(...args).getContext('2d');
	}

	class DearImage {
		static is(value) {
			return value instanceof this;
		}
		constructor(context) {
			this.context = context;
		}
		get canvas() {
			return this.context.canvas;
		}
		get sizeX() {
			return this.canvas.width;
		}
		get sizeY() {
			return this.canvas.height;
		}
	}

	function Number_prototype_isNegative(that) {
		return that < 0;
	}

	function Number_prototype_isNonNegative(that) {
		return !Number_prototype_isNegative(that);
	}

	function Number_isNonNegativeFinite(value) {
		return Number.isFinite(value) && Number_prototype_isNonNegative(value);
	}

	function String_is(value) {
		return typeof value === 'string';
	}

	function toNonNegativeInteger(value, defaultValue) {
		if (value != null) {
			if (String_is(value)) {
				value = Number(value);
			}
			if (Number_isNonNegativeFinite(value)) {
				return Math.round(value);
			}
			return defaultValue;
		}
	}

	function normalizeSize(value) {
		return toNonNegativeInteger(value, 0);
	}

	DearImage.blank = function(sizeX, sizeY) {
		sizeX = normalizeSize(sizeX);
		sizeY = normalizeSize(sizeY);
		let context = CanvasRenderingContext2D_create(sizeX, sizeY);
		return new this(context);
	};

	function Math_ceilDivisible(n, d) {
		return Math.ceil(n / d) * d;
	}

	function CanvasGradient_isInNode(value) {
		try {
			let {CanvasGradient} = require('canvas');
			return value instanceof CanvasGradient;
		} catch {
			// pass
		}
		return false;
	}

	function CanvasGradient_is(value) {
		let {CanvasGradient} = globalThis;
		return (
			(!!CanvasGradient && value instanceof CanvasGradient)
			||
			CanvasGradient_isInNode(value)
		);
	}

	function CanvasPattern_isInNode(value) {
		try {
			let {CanvasPattern} = require('canvas');
			return value instanceof CanvasPattern;
		} catch {
			// pass
		}
		return false;
	}

	function CanvasPattern_is(value) {
		let {CanvasPattern} = globalThis;
		return (
			(!!CanvasPattern && value instanceof CanvasPattern)
			||
			CanvasPattern_isInNode(value)
		);
	}

	function FreeInput_toColor(value, defaultValue) {
		if (value != null) {
			if (String_is(value)) {
				let context = CanvasRenderingContext2D_create(0, 0);
				{
					let fallbackValue = (context.fillStyle = '#000');
					context.fillStyle = value;
					if (context.fillStyle !== fallbackValue) {
						return context.fillStyle;
					}
				}
				{
					let fallbackValue = (context.fillStyle = '#fff');
					context.fillStyle = value;
					if (context.fillStyle !== fallbackValue) {
						return context.fillStyle;
					}
				}
			}
		}
		return defaultValue;
	}

	function toCanvasStyle(value, defaultValue) {
		if (value != null) {
			if (
				CanvasGradient_is(value)
				||
				CanvasPattern_is(value)
			) {
				return value;
			}
			return FreeInput_toColor(value, defaultValue);
		}
		return defaultValue;
	}

	DearImage.fill = function(style, sizeX, sizeY) {
		style = toCanvasStyle(style);
		let result = this.blank(sizeX, sizeY);
		({
			sizeX,
			sizeY,
		} = result);
		if (style && sizeX && sizeY) {
			let {context} = result;
			context.save();
			context.fillStyle = style;
			context.fillRect(0, 0, sizeX, sizeY);
			context.restore();
		}
		return result;
	};

	function toInteger(value, defaultValue) {
		if (value != null) {
			if (String_is(value)) {
				value = Number(value);
			}
			if (Number.isFinite(value)) {
				return Math.round(value);
			}
			return defaultValue;
		}
	}

	function normalizeStart(value) {
		return toInteger(value, 0);
	}

	DearImage.prototype.crop = function(startX, startY, sizeX, sizeY) {
		let {
			canvas: currentCanvas,
			sizeX: currentSizeX,
			sizeY: currentSizeY,
		} = this;
		startX = normalizeStart(startX);
		startY = normalizeStart(startY);
		sizeX = toInteger(sizeX, currentSizeX);
		sizeY = toInteger(sizeY, currentSizeY);
		if (startY < 0) {
			startY += currentSizeY;
		}
		if (startX < 0) {
			startX += currentSizeX;
		}
		if (sizeY < 0) {
			startY += sizeY;
			sizeY *= -1;
		}
		if (sizeX < 0) {
			startX += sizeX;
			sizeX *= -1;
		}
		if (startX || startY || sizeX !== currentSizeX || sizeY !== currentSizeY) {
			let result = this.constructor.blank(sizeX, sizeY);
			if (sizeX && sizeY && currentSizeX && currentSizeY) {
				let {context} = result;
				context.drawImage(currentCanvas, -startX, -startY);
			}
			return result;
		}
		return this;
	};

	function toEnum(value) {
		if (value != null) {
			if (String_is(value)) {
				return value.trim().toLowerCase();
			}
		}
	}

	DearImage.prototype.reframe = function(sizeX, sizeY, alignmentX, alignmentY) {
		let {
			sizeX: currentSizeX,
			sizeY: currentSizeY,
		} = this;
		sizeX = toNonNegativeInteger(sizeX, currentSizeX);
		sizeY = toNonNegativeInteger(sizeY, currentSizeY);
		alignmentX = toEnum(alignmentX);
		alignmentY = toEnum(alignmentY);
		let startX = -(() => {
			switch (alignmentX) {
				case 'start':
					return 0;
				case 'end':
					return sizeX;
			}
			return (currentSizeX + sizeX) / 2;
		})();
		let startY = -(() => {
			switch (alignmentY) {
				case 'start':
					return 0;
				case 'end':
					return sizeY;
			}
			return (currentSizeY + sizeY) / 2;
		})();
		return this.crop(startX, startY, sizeX, sizeY);
	};

	function Canvas_isInNode(value) {
		try {
			let {Canvas} = require('canvas');
			return value instanceof Canvas;
		} catch {
			// pass
		}
		return false;
	}

	function HTMLCanvasElement_is(value) {
		let {HTMLCanvasElement} = globalThis;
		return !!HTMLCanvasElement && value instanceof HTMLCanvasElement;
	}

	function OffscreenCanvas_is(value) {
		let {OffscreenCanvas} = globalThis;
		return !!OffscreenCanvas && value instanceof OffscreenCanvas;
	}

	function Canvas_is(value) {
		return (
			HTMLCanvasElement_is(value)
			||
			OffscreenCanvas_is(value)
			||
			Canvas_isInNode(value)
		);
	}

	function CanvasRenderingContext2D_fromCanvasImageSource(source, width, height) {
		let context = CanvasRenderingContext2D_create(width, height);
		if (width && height) {
			context.drawImage(source, 0, 0);
		}
		return context;
	}

	function CanvasRenderingContext2D_fromCanvas(canvas) {
		return CanvasRenderingContext2D_fromCanvasImageSource(canvas, canvas.width, canvas.height);
	}

	function CanvasRenderingContext2D_fromRenderingContext({canvas}) {
		return CanvasRenderingContext2D_fromCanvas(canvas);
	}

	function CanvasRenderingContext2D_fromImage(image) {
		return CanvasRenderingContext2D_fromCanvasImageSource(image, image.naturalWidth, image.naturalHeight);
	}

	async function Image_prototype_load(that) {
		if (!that.complete) {
			try {
				await new Promise((resolve, reject) => {
					that.onload = resolve;
					that.onerror = reject;
				});
			} finally {
				that.onload = null;
				that.onerror = null;
			}
		}
	}

	async function CanvasRenderingContext2D_loadFromImage(image) {
		await Image_prototype_load(image);
		return CanvasRenderingContext2D_fromImage(image);
	}

	function CanvasRenderingContext2D_fromImageData(data) {
		let {
			height,
			width,
		} = data;
		let context = CanvasRenderingContext2D_create(width, height);
		if (width && height) {
			context.putImageData(data, 0, 0);
		}
		return context;
	}

	function HTMLImageElement_is(value) {
		let {HTMLImageElement} = globalThis;
		return !!HTMLImageElement && value instanceof HTMLImageElement;
	}

	function Image_isInNode(value) {
		try {
			let {Image} = require('canvas');
			return value instanceof Image;
		} catch {
			// pass
		}
		return false;
	}

	function Image_is(value) {
		return (
			HTMLImageElement_is(value)
			||
			Image_isInNode(value)
		);
	}

	function ImageData_isInNode(value) {
		try {
			let {ImageData} = require('canvas');
			return value instanceof ImageData;
		} catch {
			// pass
		}
		return false;
	}

	function ImageData_is(value) {
		let {ImageData} = globalThis;
		return (
			(!!ImageData && value instanceof ImageData)
			||
			ImageData_isInNode(value)
		);
	}

	function CanvasRenderingContext2D_isInNode(value) {
		try {
			let {CanvasRenderingContext2D} = require('canvas');
			return value instanceof CanvasRenderingContext2D;
		} catch {
			// pass
		}
		return false;
	}

	function CanvasRenderingContext2D_is(value) {
		let {CanvasRenderingContext2D} = globalThis;
		return (
			(!!CanvasRenderingContext2D && value instanceof CanvasRenderingContext2D)
			||
			CanvasRenderingContext2D_isInNode(value)
		);
	}

	function ImageBitmapRenderingContext_is(value) {
		let {ImageBitmapRenderingContext} = globalThis;
		return !!ImageBitmapRenderingContext && value instanceof ImageBitmapRenderingContext;
	}

	function OffscreenCanvasRenderingContext2D_is(value) {
		let {OffscreenCanvasRenderingContext2D} = globalThis;
		return !!OffscreenCanvasRenderingContext2D && value instanceof OffscreenCanvasRenderingContext2D;
	}

	function WebGL2RenderingContext_is(value) {
		let {WebGL2RenderingContext} = globalThis;
		return !!WebGL2RenderingContext && value instanceof WebGL2RenderingContext;
	}

	function WebGLRenderingContext_is(value) {
		let {WebGLRenderingContext} = globalThis;
		return !!WebGLRenderingContext && value instanceof WebGLRenderingContext;
	}

	function RenderingContext_is(value) {
		return (
			CanvasRenderingContext2D_is(value)
			||
			WebGL2RenderingContext_is(value)
			||
			WebGLRenderingContext_is(value)
			||
			ImageBitmapRenderingContext_is(value)
			||
			OffscreenCanvasRenderingContext2D_is(value)
		);
	}

	function CanvasRenderingContext2D_from(value) {
		if (DearImage.is(value)) {
			return CanvasRenderingContext2D_fromRenderingContext(value);
		}
		if (ImageData_is(value)) {
			return CanvasRenderingContext2D_fromImageData(value);
		}
		if (Canvas_is(value)) {
			return CanvasRenderingContext2D_fromCanvas(value);
		}
		if (RenderingContext_is(value)) {
			return CanvasRenderingContext2D_fromRenderingContext(value);
		}
		if (Image_is(value)) {
			return CanvasRenderingContext2D_loadFromImage(value);
		}
		throw new Error('Failed to create a CanvasRenderingContext2D instance from the given value.');
	}

	DearImage.from = function(value) {
		if (this.is(value)) {
			return value;
		}
		let context = CanvasRenderingContext2D_from(value);
		return new this(context);
	};

	function normalizeImage(value) {
		if (value != null) {
			try {
				let image = DearImage.from(value);
				if (image.sizeX && image.sizeY) {
					return image;
				}
			} catch {
				// pass
			}
		}
	}

	function Object_is(value) {
		if (value) {
			let type = typeof value;
			return type === 'object' || type === 'function';
		}
		return false;
	}

	function normalizeOptions(value) {
		let alignmentX;
		let alignmentY;
		let repeatX;
		let repeatY;
		if (Object_is(value)) {
			(value => {
				if (Object_is(value)) {
					alignmentX = value.x;
					alignmentY = value.y;
				} else {
					alignmentX = alignmentY = value;
				}
			})(value.alignment);
			(value => {
				if (Object_is(value)) {
					repeatX = value.x;
					repeatY = value.y;
				} else {
					repeatX = repeatY = value;
				}
			})(value.repeat);
		}
		return {
			alignmentX,
			alignmentY,
			repeatX,
			repeatY,
		};
	}

	// todo?

	DearImage.draw = function(image, sizeX, sizeY, options) {
		image = normalizeImage(image);
		let {
			alignmentX,
			alignmentY,
			repeatX,
			repeatY,
		} = normalizeOptions(options);
		let result = this.blank(sizeX, sizeY);
		({
			sizeX,
			sizeY,
		} = result);
		if (image && sizeX && sizeY) {
			let {context} = result;
			let {canvas} = (DearImage
				.fill(
					context.createPattern(image.canvas, (() => {
						if (repeatX && repeatY) {
							return 'repeat';
						}
						if (repeatX) {
							return 'repeat-x';
						}
						if (repeatY) {
							return 'repeat-y';
						}
						return 'no-repeat';
					})()),
					Math_ceilDivisible(sizeX, image.sizeX),
					Math_ceilDivisible(sizeY, image.sizeY),
				)
				.reframe(sizeX, sizeY, alignmentX, alignmentY)
			);
			context.drawImage(canvas, 0, 0);
		}
		return result;
	};

	DearImage.flexLayout = function(direction, ...args) {
		switch (direction) {
			case 'x':
				return this.flexLayoutX(...args);
			case 'y':
				return this.flexLayoutY(...args);
		}
	};

	DearImage.flexLayoutX = function(images, {
		alignItems = 'center',
		gap = 0,
	} = {}) {
		let sizeX = images.map(({sizeX}) => sizeX).reduce((a, n) => a + n + gap);
		let sizeY = images.map(({sizeY}) => sizeY).reduce((a, n) => Math.max(a, n));
		let image = this.blank(sizeX, sizeY);
		let {context} = image;
		let left = 0;
		images.forEach(image => {
			let top;
			switch (alignItems) {
				case 'start': {
					top = 0;
					break;
				}
				case 'center': {
					top = Math.round((sizeY - image.sizeY) / 2);
					break;
				}
				case 'end': {
					top = sizeY - image.sizeY;
					break;
				}
			}
			context.drawImage(image.canvas, left, top);
			left += image.sizeX + gap;
		});
		return image;
	};

	DearImage.flexLayoutY = function(images, {
		alignItems = 'center',
		gap = 0,
	} = {}) {
		let sizeY = images.map(({sizeY}) => sizeY).reduce((a, n) => a + n + gap);
		let sizeX = images.map(({sizeX}) => sizeX).reduce((a, n) => Math.max(a, n));
		let image = this.blank(sizeX, sizeY);
		let {context} = image;
		let top = 0;
		images.forEach(image => {
			let left;
			switch (alignItems) {
				case 'start': {
					left = 0;
					break;
				}
				case 'center': {
					left = Math.round((sizeX - image.sizeX) / 2);
					break;
				}
				case 'end': {
					left = sizeX - image.sizeX;
					break;
				}
			}
			context.drawImage(image.canvas, left, top);
			top += image.sizeY + gap;
		});
		return image;
	};

	DearImage.isDearImage = DearImage.is.bind(DearImage);

	class Font {
		static is(value) {
			return value instanceof this;
		}
		constructor(family, size, {
			style,
			variant,
			weight,
		} = {}) {
			let string;
			{
				let array = [`${size}px`, family];
				if (weight !== undefined) {
					array.unshift(weight);
				}
				if (variant !== undefined) {
					array.unshift(variant);
				}
				if (style !== undefined) {
					array.unshift(style);
				}
				string = array.join(' ');
			}
			Object.assign(this, {
				family,
				size,
				style,
				variant,
				weight,
				measureText(text) {
					let context = CanvasRenderingContext2D_create(0, 0);
					context.font = string;
					return context.measureText(text);
				},
				toString() {
					return string;
				},
			});
		}
	}

	class FontFace$1 {
		static is(value) {
			return value instanceof this;
		}
		constructor(family, {
			style,
			variant,
			weight,
		} = {}) {
			Object.assign(this, {
				family,
				style,
				variant,
				weight,
				async load(source) {
					if (source) {
						try {
							await (new FontFace(family, source, {style, variant, weight})).load();
							return;
						} catch {
							// pass
						}
						try {
							let {registerFont} = require('canvas');
							await registerFont(source, {family, style, variant, weight});
							return;
						} catch {
							// pass
						}
					}
					try {
						let font = new Font(family, 1, {style, variant, weight});
						await document.fonts.load(`${font}`);
						return;
					} catch {
						// pass
					}
				},
			});
		}
	}

	var defaultFamily = 'sans-serif';

	const defaultValue = 'sans-serif';

	function normalizeFamily(value) {
		if (value != null) {
			// todo
			return value;
		}
		return defaultValue;
	}

	function normalizeStyle(value) {
		return value;
	}

	function normalizeVariant(value) {
		return value;
	}

	function normalizeWeight(value) {
		return value;
	}

	function normalizeFontFace(value) {
		if (FontFace$1.is(value)) {
			return value;
		}
		let family;
		let style;
		let variant;
		let weight;
		if (Object_is(value)) {
			({
				family,
				style,
				variant,
				weight,
			} = value);
			family = normalizeFamily(family);
			style = normalizeStyle(style);
			variant = normalizeVariant(variant);
			weight = normalizeWeight(weight);
		} else {
			family = normalizeFamily(value);
		}
		({
			family = defaultFamily,
		} = {
			family,
		});
		return new FontFace$1(family, {
			style,
			variant,
			weight,
		});
	}

	function normalizeSource(value) {
		// todo
		return value;
	}

	DearImage.loadFontFace = async function(fontFace, source) {
		fontFace = normalizeFontFace(fontFace);
		source = normalizeSource(source);
		await fontFace.load(source);
	};

	function Blob_is(value) {
		let {Blob} = globalThis;
		return !!Blob && value instanceof Blob;
	}

	function Buffer_is(value) {
		let {Buffer} = globalThis;
		return !!Buffer && value instanceof Buffer;
	}

	function Blob_prototype_isEmpty(that) {
		return !that.size;
	}

	function HTMLImageElement_create(src) {
		try {
			return Object.assign(new Image(), {src});
		} catch {
			// pass
		}
		throw new Error('HTMLImageElement is not supported.');
	}

	function Image_createInNode(src) {
		try {
			let {Image} = require('canvas');
			return Object.assign(new Image(), {src});
		} catch {
			// pass
		}
		throw new Error('Image is not supported.');
	}

	function Image_create(...args) {
		try {
			return HTMLImageElement_create(...args);
		} catch {
			// pass
		}
		return Image_createInNode(...args);
	}

	async function CanvasRenderingContext2D_loadFromImageSource(source) {
		let image = Image_create(source);
		return await CanvasRenderingContext2D_loadFromImage(image);
	}

	async function CanvasRenderingContext2D_loadFromBlob(blob) {
		if (Blob_prototype_isEmpty(blob)) {
			return CanvasRenderingContext2D_create(0, 0);
		}
		let string = URL.createObjectURL(blob);
		try {
			return await CanvasRenderingContext2D_loadFromImageSource(string);
		} finally {
			URL.revokeObjectURL(string);
		}
	}

	function Buffer_prototype_isEmpty(that) {
		return !that.length;
	}

	async function CanvasRenderingContext2D_loadFromBuffer(buffer) {
		if (Buffer_prototype_isEmpty(buffer)) {
			return CanvasRenderingContext2D_create(0, 0);
		}
		return await CanvasRenderingContext2D_loadFromImageSource(buffer);
	}

	async function CanvasRenderingContext2D_loadFromURL(url) {
		return await CanvasRenderingContext2D_loadFromImageSource(`${url}`);
	}

	async function CanvasRenderingContext2D_loadFromDataURL(url) {
		if (url.isEmpty()) {
			return CanvasRenderingContext2D_create(0, 0);
		}
		return await CanvasRenderingContext2D_loadFromURL(url);
	}

	class DataURL {
		static is(value) {
			return value instanceof this;
		}
		static isValid(value) {
			try {
				this.parse(value);
				return true;
			} catch {
				return false;
			}
		}
		static parse(string) {
			if (String_is(string)) {
				let matches = /^data:(.*?)(;base64)?,(.*)$/.exec(string);
				if (matches) {
					let type = matches[1];
					let encoded = matches[2];
					let data = matches[3];
					let empty = !data;
					return Object.assign(new this(), {
						type,
						encoded,
						data,
						isEmpty() {
							return empty;
						},
						toString() {
							return string;
						},
					});
				}
			}
			throw new Error('Invalid data URL.');
		}
	}

	async function CanvasRenderingContext2D_loadFromString(string) {
		try {
			let url = DataURL.parse(string);
			return await CanvasRenderingContext2D_loadFromDataURL(url);
		} catch {
			// pass
		}
		return await CanvasRenderingContext2D_loadFromImageSource(string);
	}

	function URL_is(value) {
		let {URL} = globalThis;
		return !!URL && value instanceof URL;
	}

	async function CanvasRenderingContext2D_loadFrom(value) {
		if (String_is(value)) {
			return await CanvasRenderingContext2D_loadFromString(value);
		}
		if (URL_is(value)) {
			return await CanvasRenderingContext2D_loadFromURL(value);
		}
		if (DataURL.is(value)) {
			return await CanvasRenderingContext2D_loadFromDataURL(value);
		}
		if (Buffer_is(value)) {
			return await CanvasRenderingContext2D_loadFromBuffer(value);
		}
		if (Blob_is(value)) {
			return await CanvasRenderingContext2D_loadFromBlob(value);
		}
		if (Image_is(value)) {
			return await CanvasRenderingContext2D_loadFromImage(value);
		}
		return CanvasRenderingContext2D_from(value);
	}

	DearImage.loadFrom = async function(value) {
		if (this.is(value)) {
			return value;
		}
		let context = await CanvasRenderingContext2D_loadFrom(value);
		return new this(context);
	};

	var defaultSize = 16;

	function toNonNegativeFinite(value, defaultValue) {
		if (value != null) {
			if (String_is(value)) {
				value = Number(value);
			}
			if (Number_isNonNegativeFinite(value)) {
				return value;
			}
			return defaultValue;
		}
	}

	function normalizeFont(value) {
		if (Font.is(value)) {
			return value;
		}
		let family;
		let size;
		let style;
		let variant;
		let weight;
		if (Object_is(value)) {
			({
				family,
				size,
				style,
				variant,
				weight,
			} = value);
			family = normalizeFamily(family);
			size = toNonNegativeFinite(size);
			style = normalizeStyle(style);
			variant = normalizeVariant(variant);
			weight = normalizeWeight(weight);
		}
		({
			family = defaultFamily,
			size = defaultSize,
		} = {
			family,
			size,
		});
		return new Font(family, size, {
			style,
			variant,
			weight,
		});
	}

	function normalizeText(value) {
		return (value == null) ? '' : String(value);
	}

	DearImage.measureText = function(text, font) {
		text = normalizeText(text);
		font = normalizeFont(font);
		return font.measureText(text);
	};

	var defaultLineGap = 1/4;

	var defaultPadding = 0.28;

	var defaultStyle = '#000';

	var defaultStrokeWidth = 0;

	function normalizeOptions$1(value) {
		let alignment;
		let font;
		let lineGap;
		let padding;
		let strokeStyle;
		let strokeWidth;
		let style;
		if (Object_is(value)) {
			({
				alignment,
				font,
				lineGap,
				padding,
				style,
			} = value);
			alignment = toEnum(alignment);
			lineGap = toNonNegativeFinite(lineGap);
			padding = toNonNegativeFinite(padding);
			style = toCanvasStyle(style);
			(value => {
				if (Object_is(value)) {
					({
						style: strokeStyle,
						width: strokeWidth,
					} = value);
					strokeStyle = toCanvasStyle(strokeStyle);
					strokeWidth = toNonNegativeFinite(strokeWidth);
				}
			})(value.stroke);
		}
		font = normalizeFont(font);
		({
			lineGap = defaultLineGap,
			padding = defaultPadding,
			strokeStyle = defaultStyle,
			strokeWidth = defaultStrokeWidth,
			style = defaultStyle,
		} = {
			lineGap,
			padding,
			strokeStyle,
			strokeWidth,
			style,
		});
		return {
			alignment,
			font,
			lineGap,
			padding,
			strokeStyle,
			strokeWidth,
			style,
		};
	}

	DearImage.text = function(text, options) {
		text = normalizeText(text);
		let {
			alignment,
			font,
			lineGap,
			padding,
			strokeStyle,
			strokeWidth,
			style,
		} = normalizeOptions$1(options);
		let {size: fontSize} = font;
		padding *= fontSize;
		lineGap *= fontSize;
		strokeWidth *= fontSize;
		let lines = text ? text.split('\n') : [];
		let linesCount = lines.length;
		let lineOffset = fontSize + lineGap;
		let contentSizeX = (linesCount
			? Math.max(...lines.map(text => font.measureText(text).width))
			: 0
		);
		let contentSizeY = (linesCount
			? (fontSize + lineOffset * (linesCount - 1))
			: 0
		);
		let contentOffset = padding + strokeWidth / 2;
		let sizeX = contentSizeX + contentOffset * 2;
		let sizeY = contentSizeY + contentOffset * 2;
		let x;
		let y = contentOffset + fontSize / 2;
		let result = this.blank(sizeX, sizeY);
		({
			sizeX,
			sizeY,
		} = result);
		let {context} = result;
		context.save();
		Object.assign(context, {
			fillStyle: style,
			font: `${font}`,
			lineWidth: strokeWidth,
			miterLimit: 1,
			strokeStyle: strokeStyle,
			textAlign: (() => {
				switch (alignment) {
					case 'start':
						x = contentOffset;
						return 'left';
					case 'end':
						x = sizeX - contentOffset;
						return 'right';
				}
				x = sizeX / 2;
				return 'center';
			})(),
			textBaseline: 'middle',
		});
		lines.forEach(text => {
			context.fillText(text, x, y);
			if (strokeWidth) {
				context.strokeText(text, x, y);
			}
			y += lineOffset;
		});
		context.restore();
		return result;
	};

	function Function_prototype_bindPartial(that, ...partials) {
		return function(...args) {
			return that.call(this, ...partials, ...args);
		};
	}

	function f(b, image, options) {
		let {
			canvas: currentCanvas,
			sizeX,
			sizeY,
		} = this;
		if (sizeX && sizeY) {
			let result = this.constructor.blank(sizeX, sizeY);
			let {canvas} = DearImage.draw(image, sizeX, sizeY, options);
			let {context} = result;
			if (b) {
				context.drawImage(currentCanvas, 0, 0);
				context.drawImage(canvas, 0, 0);
			} else {
				context.drawImage(currentCanvas, 0, 0);
				context.drawImage(canvas, 0, 0);
			}
			return result;
		}
		return this;
	}

	Object.assign(DearImage.prototype, {
		drawBackground: Function_prototype_bindPartial(f, false),
		drawForeground: Function_prototype_bindPartial(f, true),
	});

	DearImage.prototype.drawCheckeredBackground = function() {
		return this;
	};

	DearImage.prototype.fillBackground = function(style) {
		let {
			sizeX,
			sizeY,
		} = this;
		return this.drawBackground(this.constructor.fill(style, sizeX, sizeY));
	};

	DearImage.prototype.fillForeground = function(style) {
		let {
			sizeX,
			sizeY,
		} = this;
		return this.drawForeground(this.constructor.fill(style, sizeX, sizeY));
	};

	function f$1(x, y) {
		let {
			canvas: currentCanvas,
			sizeX,
			sizeY,
		} = this;
		if (sizeX && sizeY) {
			let result = this.constructor.blank(sizeX, sizeY);
			let {context} = result;
			context.save();
			context.translate(x ? sizeX : 0, y ? sizeY : 0);
			context.scale(x ? -1 : 1, y ? -1 : 1);
			context.drawImage(currentCanvas, 0, 0);
			context.restore();
			return result;
		}
		return this;
	}

	Object.assign(DearImage.prototype, {
		flipX: Function_prototype_bindPartial(f$1, true, false),
		flipY: Function_prototype_bindPartial(f$1, false, true),
	});

	DearImage.prototype.toImageData = function() {
		let {
			context,
			sizeX,
			sizeY,
		} = this;
		return context.getImageData(0, 0, sizeX, sizeY);
	};

	DearImage.prototype.isBlank = function() {
		let {
			sizeX,
			sizeY,
		} = this;
		return !(sizeX && sizeY && this.toImageData().data.some(x => x));
	};

	DearImage.prototype.resize = function(sizeX, sizeY) {
		let {
			canvas: currentCanvas,
			sizeX: currentSizeX,
			sizeY: currentSizeY,
		} = this;
		sizeX = toNonNegativeInteger(sizeX, currentSizeX);
		sizeY = toNonNegativeInteger(sizeY, currentSizeY);
		if (sizeX !== currentSizeX || sizeY !== currentSizeY) {
			let result = this.constructor.blank(sizeX, sizeY);
			if (sizeX && sizeY && currentSizeX && currentSizeY) {
				let scalingX = sizeX / currentSizeX;
				let scalingY = sizeY / currentSizeY;
				let {context} = result;
				context.save();
				context.scale(scalingX, scalingY);
				context.drawImage(currentCanvas, 0, 0);
				context.restore();
			}
			return result;
		}
		return this;
	};

	function normalizeScaling(value) {
		return toNonNegativeFinite(value, 1);
	}

	DearImage.prototype.rescale = function(scalingX, scalingY) {
		let {
			sizeX: currentSizeX,
			sizeY: currentSizeY,
		} = this;
		scalingX = normalizeScaling(scalingX);
		scalingY = normalizeScaling(scalingY);
		let sizeX = Math.round(currentSizeX * scalingX);
		let sizeY = Math.round(currentSizeY * scalingY);
		return this.resize(sizeX, sizeY);
	};

	DearImage.prototype.scale = function(scaling) {
		return this.rescale(scaling, scaling);
	};

	function f$2(aggregateScalings, sizeX, sizeY) {
		let {
			sizeX: currentSizeX,
			sizeY: currentSizeY,
		} = this;
		sizeX = toNonNegativeInteger(sizeX, currentSizeX);
		sizeY = toNonNegativeInteger(sizeY, currentSizeY);
		let scalings = [];
		if (sizeX && currentSizeX) {
			let scalingX = sizeX / currentSizeX;
			scalings.push(scalingX);
		}
		if (sizeY && currentSizeY) {
			let scalingY = sizeY / currentSizeY;
			scalings.push(scalingY);
		}
		if (scalings.length) {
			let scaling = aggregateScalings(scalings);
			return this.scale(scaling);
		}
		return this;
	}

	Object.assign(DearImage.prototype, {
		scaleDownIn: Function_prototype_bindPartial(f$2, ns => Math.min(Math.min(...ns), 1)),
		scaleDownOut: Function_prototype_bindPartial(f$2, ns => Math.min(Math.max(...ns), 1)),
		scaleIn: Function_prototype_bindPartial(f$2, ns => Math.min(...ns)),
		scaleOut: Function_prototype_bindPartial(f$2, ns => Math.max(...ns)),
		scaleUpIn: Function_prototype_bindPartial(f$2, ns => Math.max(Math.min(...ns), 1)),
		scaleUpOut: Function_prototype_bindPartial(f$2, ns => Math.max(Math.max(...ns), 1)),
	});

	DearImage.prototype.reframeScaleIn = function(sizeX, sizeY, alignmentX, alignmentY) {
		let {
			sizeX: currentSizeX,
			sizeY: currentSizeY,
		} = this;
		sizeX = toNonNegativeInteger(sizeX, currentSizeX);
		sizeY = toNonNegativeInteger(sizeY, currentSizeY);
		return this.scaleIn(sizeX, sizeY).reframe(sizeX, sizeY, alignmentX, alignmentY);
	};

	DearImage.prototype.reframeScaleOut = function(sizeX, sizeY, alignmentX, alignmentY) {
		let {
			sizeX: currentSizeX,
			sizeY: currentSizeY,
		} = this;
		sizeX = toNonNegativeInteger(sizeX, currentSizeX);
		sizeY = toNonNegativeInteger(sizeY, currentSizeY);
		return this.scaleOut(sizeX, sizeY).reframe(sizeX, sizeY, alignmentX, alignmentY);
	};

	DearImage.prototype.resizeX = function(sizeX, proportionally) {
		let {
			sizeX: currentSizeX,
			sizeY: currentSizeY,
		} = this;
		sizeX = toNonNegativeInteger(sizeX, currentSizeX);
		if (proportionally) {
			if (currentSizeX) {
				let scaling = sizeX / currentSizeX;
				return this.scale(scaling);
			}
			return this;
		}
		return this.resize(sizeX, currentSizeY);
	};

	DearImage.prototype.resizeY = function(sizeY, proportionally) {
		let {
			sizeX: currentSizeX,
			sizeY: currentSizeY,
		} = this;
		sizeY = toNonNegativeInteger(sizeY, currentSizeY);
		if (proportionally) {
			if (currentSizeY) {
				let scaling = sizeY / currentSizeY;
				return this.scale(scaling);
			}
			return this;
		}
		return this.resize(currentSizeX, sizeY);
	};

	function toFinite(value, defaultValue) {
		if (value != null) {
			if (String_is(value)) {
				value = Number(value);
			}
			if (Number.isFinite(value)) {
				return value;
			}
			return defaultValue;
		}
	}

	function normalizeAngle(value) {
		return toFinite(value, 0) % (Math.PI*2);
	}

	DearImage.prototype.rotate = function(angle) {
		let {
			canvas: currentCanvas,
			sizeX: currentSizeX,
			sizeY: currentSizeY,
		} = this;
		angle = normalizeAngle(angle);
		if (angle && currentSizeX && currentSizeY) {
			let cosA = Math.abs(Math.cos(angle));
			let sinA = Math.abs(Math.sin(angle));
			let sizeX = Math.round(currentSizeX * cosA + currentSizeY * sinA);
			let sizeY = Math.round(currentSizeX * sinA + currentSizeY * cosA);
			let result = this.constructor.blank(sizeX, sizeY);
			let {context} = result;
			context.save();
			context.translate(sizeX / 2, sizeY / 2);
			context.rotate(angle);
			context.drawImage(currentCanvas, -currentSizeX / 2, -currentSizeY / 2);
			context.restore();
			return result;
		}
		return this;
	};

	var value = Math.PI/2;

	DearImage.prototype.rotateClockwise = function() {
		return this.rotate(value);
	};

	var delta = -value;

	DearImage.prototype.rotateCounterClockwise = function() {
		return this.rotate(delta);
	};

	DearImage.prototype.toBuffer = function(...args) {
		let {
			canvas,
			sizeX,
			sizeY,
		} = this;
		if (sizeX && sizeY) {
			return canvas.toBuffer(...args);
		}
		return Buffer.alloc(0);
	};

	DearImage.prototype.saveToFileSystem = function(target, ...args) {
		return new Promise((resolve, reject) => {
			let fs = require('fs');
			let path = require('path');
			let buffer = this.toBuffer(...args);
			fs.mkdir(path.dirname(target), {recursive: true}, error => {
				if (error) {
					reject(error);
				} else {
					fs.writeFile(target, buffer, error => {
						if (error) {
							reject(error);
						} else {
							resolve();
						}
					});
				}
			});
		});
	};

	function String_prototype_toCharCode(that) {
		let {length} = that;
		let array = new Uint8Array(length);
		for (let i = 0; i < length; i++) {
			array[i] = that.charCodeAt(i);
		}
		return array;
	}

	DearImage.prototype.toDataURL = function(...args) {
		let {canvas} = this;
		return canvas.toDataURL(...args);
	};

	// todo?

	DearImage.prototype.toBlob = function(...args) {
		let {
			data,
			type,
		} = DataURL.parse(this.toDataURL(...args));
		let array = String_prototype_toCharCode(atob(data));
		return new Blob([array], {type});
	};

	DearImage.prototype.toHTMLCanvasElement = function() {
		let {
			canvas,
			sizeX,
			sizeY,
		} = this;
		let result = HTMLCanvasElement_create(sizeX, sizeY);
		if (sizeX && sizeY) {
			result.getContext('2d').drawImage(canvas, 0, 0);
		}
		return result;
	};

	DearImage.prototype.toHTMLImageElement = function(...args) {
		return HTMLImageElement_create(this.toDataURL(...args));
	};

	DearImage.prototype.toOffscreenCanvas = function() {
		let {
			canvas,
			sizeX,
			sizeY,
		} = this;
		let result = OffscreenCanvas_create(sizeX, sizeY);
		if (sizeX && sizeY) {
			result.getContext('2d').drawImage(canvas, 0, 0);
		}
		return result;
	};

	DearImage.utils = {};

	DearImage.utils.isDataURL = function(value) {
		return DataURL.isValid(value);
	};

	function URL_parse(string) {
		try {
			if (String_is(string)) {
				let {URL} = globalThis;
				if (URL) {
					let {document} = globalThis;
					if (document) {
						return new URL(string, document.location.origin);
					}
					return new URL(string);
				}
			}
		} catch {
			// pass
		}
		throw new Error('Invalid URL.');
	}

	function URL_isValid(string) {
		try {
			URL_parse(string);
			return true;
		} catch {
			return false;
		}
	}

	DearImage.utils.isURL = function(value) {
		return URL_is(value) || URL_isValid(value);
	};

	return DearImage;

})));
