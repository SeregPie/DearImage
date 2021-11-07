import '../DearImage.equals';
import '../DearImage.from';
import DearImage from '../DearImage';

import './';

describe('DearImage.prototype.toImageData', () => {
	it.skip('should return instance of ImageData', async () => {
		// todo: get image
		let image;
		let value = image.toImageData();
		expect(value).toBeInstanceOf(ImageData);
	});

	it.skip('should equal itself', async () => {
		// todo: get image
		let image;
		let value = image.toImageData();
		let otherImage = await DearImage.from(value);
		expect(otherImage.equals(image)).toBe(true);
	});
});
