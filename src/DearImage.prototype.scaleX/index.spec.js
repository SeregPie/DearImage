import DearImage from '../DearImage';

import './';

describe('DearImage.prototype.scaleX', () => {
	it.skip('should work', () => {
		// todo: get image
		let image;
		// todo: which args?
		let otherImage = image.scaleX(a);
		// todo: check snapshot
		expect(otherImage);
	});

	it.skip('should skip unnecessary', async () => {
		// todo: get image
		let image;
		{
			let otherImage = image.scaleX(1);
			expect(otherImage).toBe(image);
		}
	});
});
