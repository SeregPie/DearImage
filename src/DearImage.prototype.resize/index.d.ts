// todo: declare

import DearImage from '../DearImage';
import {SizeN} from '../DearImage.blank';

export {SizeN};

declare module '../DearImage' {
	class DearImage {
		resize(sizeX: SizeN, sizeY: SizeN): DearImage;

		/*
		resize(size: {x?: SizeN, y?: SizeN})
		*/
	}
	export = DearImage;
}
