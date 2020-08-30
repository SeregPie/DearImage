let assert = require('assert').strict;

let DearImage = require('../../');

module.exports = async function() {
	{
		let image = DearImage.blank(300, 150);
		{
			let otherImage = DearImage.from(image);
			assert.equal(otherImage, image);
		}
		{
			let otherImage = await DearImage.loadFrom(image);
			assert.equal(otherImage, image);
		}
		for (let value of [
			image.canvas,
			image.context,
			image.toBuffer(),
			image.toDataURL(),
			image.toImageData(),
		]) {
			let otherImage = await DearImage.loadFrom(value);
			assert.equal(otherImage.sizeX, image.sizeX);
			assert.equal(otherImage.sizeY, image.sizeY);
		}
	}
	for (let image of [
		DearImage.blank(0, 100),
		DearImage.blank(100, 0),
		DearImage.blank(),
	]) {
		for (let value of [
			image.canvas,
			image.context,
		]) {
			let otherImage = await DearImage.loadFrom(value);
			assert.equal(otherImage.sizeX, image.sizeX);
			assert.equal(otherImage.sizeY, image.sizeY);
		}
		for (let value of [
			image.toBuffer(),
			image.toDataURL(),
		]) {
			let otherImage = await DearImage.loadFrom(value);
			assert.equal(otherImage.sizeX, 0);
			assert.equal(otherImage.sizeY, 0);
		}
		assert.throws(() => {
			image.toImageData();
		});
	}
};
