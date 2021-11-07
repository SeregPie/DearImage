import DearImage from '../DearImage';

import './';

describe('DearImage.isDearImage', () => {
	it.skip('should return true if value instance of DearImage', async () => {
		// todo: get image
		let image;
		expect(DearImage.isDearImage(image)).toBe(true);
	});

	it('should return true if value not instance of DearImage', () => {
		expect(DearImage.isDearImage(DearImage)).toBe(false);
		expect(DearImage.isDearImage(42)).toBe(false);
	});
});
