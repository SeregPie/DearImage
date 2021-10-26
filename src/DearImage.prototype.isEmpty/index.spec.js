import '../DearImage.blank';
import DearImage from '../DearImage';

import '.';

describe('DearImage.prototype.isEmpty', () => {
	it('should return true if image empty', () => {
		for (let image of [
			DearImage.blank(0, 100),
			DearImage.blank(100, 0),
			DearImage.blank(),
		]) {
			expect(image.isEmpty()).toBe(true);
		}
	});

	it('should return false if image not empty', () => {
		let image = DearImage.blank(300, 150);
		expect(image.isEmpty()).toBe(false);
	});
});
