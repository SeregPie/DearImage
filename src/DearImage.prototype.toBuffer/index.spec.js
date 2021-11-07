import '../DearImage.equals';
import '../DearImage.from';
import DearImage from '../DearImage';

import './';

describe('DearImage.prototype.toBuffer', () => {
	it.skip('should return instance of Buffer', async () => {
		// todo: get image
		let image;
		let value = image.toBuffer();
		expect(value).toBeInstanceOf(Buffer);
	});

	it.skip('should equal itself', async () => {
		// todo: get image
		let image;
		let value = image.toBuffer();
		let otherImage = await DearImage.from(value);
		expect(otherImage.equals(image)).toBe(true);
	});
});
