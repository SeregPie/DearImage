import DearImage from '../DearImage';

import './';

describe('DearImage.blank', () => {
	test('lqzsubmjqarh', () => {
		let sizeX = 300;
		let sizeY = 150;
		let image = DearImage.blank(sizeX, sizeY);
		expect(image.sizeX).toBe(sizeX);
		expect(image.sizeY).toBe(sizeY);
	});
	test('gitsmncelnqe', () => {
		let image = DearImage.blank();
		expect(image.sizeX).toBe(0);
		expect(image.sizeY).toBe(0);
	});
});
