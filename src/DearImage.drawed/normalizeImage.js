import '../DearImage.from';

import DearImage from '../@core/DearImage';

export default function(value) {
	try {
		let image = DearImage.from(value);
		let {
			sizeX,
			sizeY,
		} = image;
		if (sizeX && sizeY) {
			return image;
		}
	} catch {
		// pass
	}
}