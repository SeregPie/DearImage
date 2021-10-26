import '../DearImage.blank';
import DearImage from '../DearImage';

import '.';

describe('DearImage.prototype.flipX', () => {
	it.todo('should work');

	it('should skip empty image', () => {
		for (let image of [
			DearImage.blank(0, 100),
			DearImage.blank(100, 0),
			DearImage.blank(),
		]) {
			let otherImage = image.flipX();
			expect(image).toBe(otherImage);
		}
	});
});
