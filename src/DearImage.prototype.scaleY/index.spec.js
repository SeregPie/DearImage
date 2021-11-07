import DearImage from '../DearImage';

import './';

describe('DearImage.prototype.scaleY', () => {
	it.skip('should work', () => {
		// todo: get image
		let image;
		// todo: which args?
		let otherImage = image.scaleY(a);
		// todo: check snapshot
		expect(otherImage);
	});

	it.skip('should skip unnecessary', async () => {
		// todo: get image
		let image;
		{
			let otherImage = image.scaleY(1);
			expect(otherImage).toBe(image);
		}
	});
});
