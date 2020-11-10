import DearImage from '../@core/DearImage';

import '../DearImage.from';

export default function(value) {
	try {
		let image = DearImage.from(value);
		if (image.sizeX && image.sizeY) {
			return image;
		}
	} catch {
		// pass
	}
}
