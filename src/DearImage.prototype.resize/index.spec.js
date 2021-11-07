import DearImage from '../DearImage';

import './index.d.ts';

describe('DearImage.prototype.resize', () => {
	it.skip('should work', () => {
		// todo: get image
		let image = new DearImage();
		{
			// todo: which args?
			let b = image.sizeX;
			let otherImage = image.resize(a, b);
			// todo: check snapshot
			expect(otherImage);
		}
		{
			// todo: which args?
			let otherImage = image.resize(a, b);
			// todo: check snapshot
			expect(otherImage);
		}
	});

	it.skip('should skip unnecessary', async () => {
		// todo: get image
		let image;
		let otherImage = image.resize(image.sizeX, image.sizeY);
		expect(otherImage).toBe(image);
	});
});
