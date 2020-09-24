import Canvas_is from '../Canvas/is';
import CanvasRenderingContext2D_fromCanvas from './fromCanvas';
import CanvasRenderingContext2D_fromDearImage from './fromDearImage';
import CanvasRenderingContext2D_fromImage from './loadFromImage';
import CanvasRenderingContext2D_fromImageData from './fromImageData';
import CanvasRenderingContext2D_fromRenderingContext from './fromRenderingContext';
import DearImage from '../DearImage';
import Image_is from '../Image/is';
import ImageData_is from '../ImageData/is';
import RenderingContext_is from '../RenderingContext/is';

export default function(value) {
	if (DearImage.is(value)) {
		return CanvasRenderingContext2D_fromDearImage(value);
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
		return CanvasRenderingContext2D_fromImage(value);
	}
	throw new Error('Failed to create a CanvasRenderingContext2D instance from the given value.');
}
