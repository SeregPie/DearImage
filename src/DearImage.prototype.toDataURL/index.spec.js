import '../DearImage.equals';
import '../DearImage.from';
import DearImage from '../DearImage';

import './';

describe('DearImage.prototype.toDataURL', () => {
	it.skip('should return valid DataURL string', async () => {
		// todo: get image
		let image;
		let value = image.toOffscreenCanvas();
		// todo: check if valid DataURL
	});

	it.skip('should equal itself', async () => {
		// todo: get image
		let image;
		let value = image.toOffscreenCanvas();
		let otherImage = await DearImage.from(value);
		expect(otherImage.equals(image)).toBe(true);
	});
});
