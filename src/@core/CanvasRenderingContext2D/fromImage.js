import CanvasRenderingContext2D_fromCanvasImageSource from './fromCanvasImageSource';

export default function(image) {
	return CanvasRenderingContext2D_fromCanvasImageSource(image, image.naturalWidth, image.naturalHeight);
}
