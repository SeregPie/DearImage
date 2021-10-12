import '../DearImage.blank';
import '../DearImage.prototype.toBuffer';
import '../DearImage.prototype.toDataURL';
import '../DearImage.prototype.toImageData';
import DearImage from '../DearImage';

import './';

describe.skip('DearImage.loadFrom', () => {
	test('from DearImage', async () => {
		let image = DearImage.blank(300, 150);
		let otherImage = await DearImage.loadFrom(image);
		expect(otherImage).toBe(image);
	});
	test('from Buffer', async () => {
		let image = DearImage.blank(300, 150);
		let value = image.toBuffer();
		let otherImage = await DearImage.loadFrom(value);
		expect(otherImage.sizeX).toBe(image.sizeX);
		expect(otherImage.sizeY).toBe(image.sizeY);
	});
	test('from DataURL', async () => {
		let image = DearImage.blank(300, 150);
		let value = image.toDataURL();
		let otherImage = await DearImage.loadFrom(value);
		expect(otherImage.sizeX).toBe(image.sizeX);
		expect(otherImage.sizeY).toBe(image.sizeY);
	});
	test('from ImageData', async () => {
		let image = DearImage.blank(300, 150);
		let value = image.toImageData();
		let otherImage = await DearImage.loadFrom(value);
		expect(otherImage.sizeX).toBe(image.sizeX);
		expect(otherImage.sizeY).toBe(image.sizeY);
	});
});
