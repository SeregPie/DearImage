import DearImage from '../DearImage';

import './';

describe('DearImage.prototype.rotate', () => {
	it.skip('should work', () => {
		// todo: get image
		let image;
		// todo: which args?
		let otherImage = image.rotate(a);
		// todo: check snapshot
		expect(otherImage);
	});

	it.skip('should skip unnecessary', async () => {
		// todo: get image
		let image;
		let otherImage = image.rotate(0);
		expect(otherImage).toBe(image);
	});
});
