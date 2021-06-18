import '../DearImage.isDearImage';
import DearImage from '../DearImage';

let {isDearImage} = DearImage;

import createCanvasRenderingContext2D from '../utils/createCanvasRenderingContext2D';
import createImage from '../utils/createImage';
import decodeImage from '../utils/decodeImage';
import isBlob from '../utils/isBlob';
import isBuffer from '../utils/isBuffer';
import isCanvas from '../utils/isCanvas';
import isImage from '../utils/isImage';
import isImageData from '../utils/isImageData';
import isRenderingContext from '../utils/isRenderingContext';
import isString from '../utils/isString';
import isURL from '../utils/isURL';

function toContext(value) {
	if (isImageData(value)) {
		return toContextFromImageData(value);
	}
	if (isCanvas(value)) {
		return toContextFromCanvas(value);
	}
	if (isRenderingContext(value)) {
		return toContextFromRenderingContext(value);
	}
	if (isImage(value)) {
		return toContextFromImage(value);
	}
	if (isDearImage(value)) {
		return toContextFromDearImage(value);
	}
	throw new Error('Failed to create an instance of CanvasRenderingContext2D from the given value.');
}

async function toContextAsync(value) {
	if (isString(value)) {
		return await toContextFromStringAsync(value);
	}
	if (isURL(value)) {
		return await toContextFromURLAsync(value);
	}
	if (isBuffer(value)) {
		return await toContextFromBufferAsync(value);
	}
	if (isBlob(value)) {
		return await toContextFromBlobAsync(value);
	}
	if (isImage(value)) {
		return await toContextFromImageAsync(value);
	}
	return toContext(value);
}

async function toContextFromBlobAsync(blob) {
	if (blob.size) {
		let string = URL.createObjectURL(blob);
		try {
			return await toContextFromImageSourceAsync(string);
		} finally {
			URL.revokeObjectURL(string);
		}
	}
	return createCanvasRenderingContext2D(0, 0);
}

async function toContextFromBufferAsync(buffer) {
	if (buffer.length) {
		return await toContextFromImageSourceAsync(buffer);
	}
	return createCanvasRenderingContext2D(0, 0);
}

function toContextFromCanvas(canvas) {
	return toContextFromCanvasImageSource(canvas, canvas.width, canvas.height);
}

function toContextFromCanvasImageSource(source, width, height) {
	let context = createCanvasRenderingContext2D(width, height);
	if (width && height) {
		context.drawImage(source, 0, 0);
	}
	return context;
}

function toContextFromDearImage(image) {
	return image.context;
}

function toContextFromImage(image) {
	return toContextFromCanvasImageSource(image, image.naturalWidth, image.naturalHeight);
}

async function toContextFromImageAsync(image) {
	await decodeImage(image);
	return toContextFromImage(image);
}

function toContextFromImageData(data) {
	let {
		height,
		width,
	} = data;
	let context = createCanvasRenderingContext2D(width, height);
	if (width && height) {
		context.putImageData(data, 0, 0);
	}
	return context;
}

async function toContextFromImageSourceAsync(source) {
	let image = createImage(source);
	return await toContextFromImageAsync(image);
}

function toContextFromRenderingContext(context) {
	return toContextFromCanvas(context.canvas);
}

async function toContextFromStringAsync(string) {
	// todo
	return await toContextFromImageSourceAsync(string);
}

async function toContextFromURLAsync(url) {
	return await toContextFromImageSourceAsync(`${url}`);
}

DearImage.from = function(value) {
	if (this.is(value)) {
		return value;
	}
	let context = toContext(value);
	return new this(context);
};

DearImage.loadFrom = async function(value) {
	if (this.is(value)) {
		return value;
	}
	let context = await toContextAsync(value);
	return new this(context);
};
