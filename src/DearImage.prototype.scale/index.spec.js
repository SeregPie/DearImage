import DearImage from '../DearImage';

import './';

describe('DearImage.prototype.scale', () => {
	it.skip('should work', () => {
		// todo: get image
		let image;
		{
			// todo: which args?
			let otherImage = image.scale(a);
			// todo: check snapshot
			expect(otherImage);
		}
		{
			// todo: which args?
			let otherImage = image.scale(3/2, 2/3);
			// todo: check snapshot
			expect(otherImage);
		}
	});

	it.skip('should skip unnecessary', async () => {
		// todo: get image
		let image;
		{
			let otherImage = image.scale(1);
			expect(otherImage).toBe(image);
		}
		{
			let otherImage = image.scale(1, 1);
			expect(otherImage).toBe(image);
		}
	});
});
