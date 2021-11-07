// todo: rename gjfcunbb

import '../DearImage.isDearImage';
import DearImage from '../DearImage';

let {isDearImage} = DearImage;

import createCanvasRenderingContext2D from '../utils/createCanvasRenderingContext2D';
import createImage from '../utils/createImage';
import isBlob from '../utils/isBlob';
import isBuffer from '../utils/isBuffer';
import isCanvas from '../utils/isCanvas';
import isImage from '../utils/isImage';
import isImageData from '../utils/isImageData';
import isRenderingContext from '../utils/isRenderingContext';
import isString from '../utils/isString';
import isURL from '../utils/isURL';

// todo: order of functions

export function gjfcunbbDearImage(image) {
	return image.context;
}

export function gjfcunbbCanvasImageSource(source, width, height) {
	if (width && height) {
		let context = createCanvasRenderingContext2D(width, height);
		context.drawImage(source, 0, 0);
		return context;
	}
	// todo: message
	throw new Error();
}

export function gjfcunbbCanvas(canvas) {
	return gjfcunbbCanvasImageSource(canvas, canvas.width, canvas.height);
}

export function gjfcunbbImageData(data) {
	let {
		height,
		width,
	} = data;
	let context = createCanvasRenderingContext2D(width, height);
	context.putImageData(data, 0, 0);
	return context;
}

export function gjfcunbbRenderingContext(context) {
	return gjfcunbbCanvas(context.canvas);
}

export async function gjfcunbbBlob(blob) {
	if (blob.size) {
		let string = URL.createObjectURL(blob);
		let result;
		try {
			result = await gjfcunbbImageSource(string);
		} finally {
			// todo: check if needed
			URL.revokeObjectURL(string);
		}
		return result;
	}
	// todo: message
	throw new Error();
}

export async function gjfcunbbBuffer(buffer) {
	if (buffer.length) {
		return gjfcunbbImageSource(buffer);
	}
	// todo: message
	throw new Error();
}

async function gjfcunbbImage(image) {
	// todo: support node
	await image.decode();
	return gjfcunbbCanvasImageSource(image, image.naturalWidth, image.naturalHeight);
}

export async function gjfcunbbImageSource(source) {
	let image = createImage(source);
	return gjfcunbbImage(image);
}

function gjfcunbbString(string) {
	// todo
	return gjfcunbbImageSource(string);
}

function gjfcunbbURL(url) {
	return gjfcunbbImageSource(`${url}`);
}

export default async function gjfcunbb(value) {
	if (isString(value)) {
		return gjfcunbbString(value);
	}
	if (isURL(value)) {
		return gjfcunbbURL(value);
	}
	if (isBuffer(value)) {
		return gjfcunbbBuffer(value);
	}
	if (isBlob(value)) {
		return gjfcunbbBlob(value);
	}
	if (isImage(value)) {
		return gjfcunbbImage(value);
	}
	if (isImageData(value)) {
		return gjfcunbbImageData(value);
	}
	// todo ImageBitmap
	if (isCanvas(value)) {
		return gjfcunbbCanvas(value);
	}
	if (isRenderingContext(value)) {
		return gjfcunbbRenderingContext(value);
	}
	if (isDearImage(value)) {
		return gjfcunbbDearImage(value);
	}
	throw new Error('Failed to create an instance of CanvasRenderingContext2D from the given value.');
}
