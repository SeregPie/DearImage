import '../DearImage.blank';
import DearImage from '../DearImage';

import '.';

describe('DearImage.prototype.isBlank', () => {
	it('should return true if image blank', () => {
		let image = DearImage.blank(300, 150);
		expect(image.isBlank()).toBe(true);
	});

	it.todo('should return false if image not blank');
});
