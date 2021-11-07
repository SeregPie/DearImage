import '../DearImage.equals';
import '../DearImage.from';
import DearImage from '../DearImage';

import './';

describe('DearImage.prototype.toHTMLCanvasElement', () => {
	it.skip('should return instance of HTMLCanvasElement', async () => {
		// todo: get image
		let image;
		let value = image.toHTMLCanvasElement();
		expect(value).toBeInstanceOf(HTMLCanvasElement);
	});

	it.skip('should equal itself', async () => {
		// todo: get image
		let image;
		let value = image.toHTMLCanvasElement();
		let otherImage = await DearImage.from(value);
		expect(otherImage.equals(image)).toBe(true);
	});
});
