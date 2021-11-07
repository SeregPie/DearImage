import DearImage from '../DearImage';

import './';

describe('DearImage.prototype.resizeY', () => {
	it.skip('should work', () => {
		// todo: get image
		let image;
		{
			// todo: which args?
			let otherImage = image.resizeY(a);
			// todo: check snapshot
			expect(otherImage);
		}
		{
			// todo: which args?
			let otherImage = image.resizeY(a);
			// todo: check snapshot
			expect(otherImage);
		}
		{
			// todo: which args?
			let otherImage = image.resizeY(a, true);
			// todo: check snapshot
			expect(otherImage);
		}
		{
			// todo: which args?
			let otherImage = image.resizeY(a, true);
			// todo: check snapshot
			expect(otherImage);
		}
	});

	it.skip('should skip unnecessary', async () => {
		// todo: get image
		let image;
		{
			let otherImage = image.resizeY(image.sizeY);
			expect(otherImage).toBe(image);
		}
		{
			let otherImage = image.resizeY(image.sizeY, true);
			expect(otherImage).toBe(image);
		}
	});
});
