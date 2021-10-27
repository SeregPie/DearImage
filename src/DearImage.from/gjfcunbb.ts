// todo: rename file

import '../DearImage.isDearImage';
import DearImage from '../DearImage';

let {isDearImage} = DearImage;

import createCanvasRenderingContext2D from '../utils/createCanvasRenderingContext2D';
import isCanvas from '../utils/isCanvas';
import isImage from '../utils/isImage';
import isImageData from '../utils/isImageData';
import isRenderingContext from '../utils/isRenderingContext';

// todo: rename
export function gjfcunbbDearImage(image) {
	return image.context;
}

// todo: rename
export function gjfcunbbCanvasImageSource(source, width, height) {
	let context = createCanvasRenderingContext2D(width, height);
	if (width && height) {
		context.drawImage(source, 0, 0);
	}
	return context;
}

// todo: rename
export function gjfcunbbCanvas(canvas) {
	return gjfcunbbCanvasImageSource(canvas, canvas.width, canvas.height);
}

// todo: rename
export function gjfcunbbImage(image) {
	return gjfcunbbCanvasImageSource(image, image.naturalWidth, image.naturalHeight);
}

// todo: rename
export function gjfcunbbImageData(data) {
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

// todo: rename
export function gjfcunbbRenderingContext(context) {
	return gjfcunbbCanvas(context.canvas);
}

// todo: rename
export function gjfcunbb(value) {
	if (isImageData(value)) {
		return gjfcunbbImageData(value);
	}
	if (isCanvas(value)) {
		return gjfcunbbCanvas(value);
	}
	if (isRenderingContext(value)) {
		return gjfcunbbRenderingContext(value);
	}
	if (isImage(value)) {
		return gjfcunbbImage(value);
	}
	if (isDearImage(value)) {
		return gjfcunbbDearImage(value);
	}
	throw new Error('Failed to create an instance of CanvasRenderingContext2D from the given value.');
}

export default gjfcunbb;
