import DearImage from '../DearImage';

import './';

describe('DearImage.prototype.resizeX', () => {
	it.skip('should work', () => {
		// todo: get image
		let image;
		{
			// todo: which args?
			let otherImage = image.resizeX(a);
			// todo: check snapshot
			expect(otherImage);
		}
		{
			// todo: which args?
			let otherImage = image.resizeX(a);
			// todo: check snapshot
			expect(otherImage);
		}
		{
			// todo: which args?
			let otherImage = image.resizeX(a, true);
			// todo: check snapshot
			expect(otherImage);
		}
		{
			// todo: which args?
			let otherImage = image.resizeX(a, true);
			// todo: check snapshot
			expect(otherImage);
		}
	});

	it.skip('should skip unnecessary', async () => {
		// todo: get image
		let image;
		{
			let otherImage = image.resizeX(image.sizeX);
			expect(otherImage).toBe(image);
		}
		{
			let otherImage = image.resizeX(image.sizeX, true);
			expect(otherImage).toBe(image);
		}
	});
});
