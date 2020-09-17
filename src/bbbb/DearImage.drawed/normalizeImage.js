import '../DearImage.from';

import DearImage from '../../core/DearImage';

export default function(value) {
	try {
		value = DearImage.from(value);
		let {
			sizeX,
			sizeY,
		} = value;
		if (sizeX && sizeY) {
			return value;
		}
	} catch {
		// pass
	}
}
