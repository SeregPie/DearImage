import '../DearImage.equals';
import '../DearImage.from';
import DearImage from '../DearImage';

import './';

describe('DearImage.prototype.toOffscreenCanvas', () => {
	it.skip('should return instance of OffscreenCanvas', async () => {
		// todo: get image
		let image;
		let value = image.toOffscreenCanvas();
		expect(value).toBeInstanceOf(OffscreenCanvas);
	});

	it.skip('should equal itself', async () => {
		// todo: get image
		let image;
		let value = image.toOffscreenCanvas();
		let otherImage = await DearImage.from(value);
		expect(otherImage.equals(image)).toBe(true);
	});
});
