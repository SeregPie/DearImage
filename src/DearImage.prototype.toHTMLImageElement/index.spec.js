import '../DearImage.equals';
import '../DearImage.from';
import DearImage from '../DearImage';

import './';

describe('DearImage.prototype.toHTMLImageElement', () => {
	it.skip('should work', async () => {
		// todo: get image
		let image;
		let value = image.toHTMLImageElement();
		expect(value).toBeInstanceOf(HTMLImageElement);
		let otherImage = await DearImage.from(value);
		expect(otherImage.equals(image)).toBe(true);
	});

	it.skip('should return instance of HTMLImageElement', async () => {
		// todo: get image
		let image;
		let value = image.toHTMLImageElement();
		expect(value).toBeInstanceOf(HTMLImageElement);
	});

	it.skip('should equal itself', async () => {
		// todo: get image
		let image;
		let value = image.toHTMLImageElement();
		let otherImage = await DearImage.from(value);
		expect(otherImage.equals(image)).toBe(true);
	});
});
