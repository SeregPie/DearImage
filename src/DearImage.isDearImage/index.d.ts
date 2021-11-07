// todo: declare

import DearImage from '../DearImage';

declare module '../DearImage' {
	class DearImage {
		static isDearImage(value: any): boolean;
	}
}

DearImage.isDearImage = function(value) {
	return value instanceof DearImage;
};

export default DearImage;
