import '../DearImage.blank';
import DearImage from '../DearImage';

import './';

describe('DearImage.from', () => {
	test('from DearImage', () => {
		let image = DearImage.blank(300, 150);
		let otherImage = DearImage.from(image);
		expect(otherImage).toBe(image);
	});
});
