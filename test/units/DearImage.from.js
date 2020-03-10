let assert = require('assert').strict;

let DearImage = require('../../index');

module.exports = async function() {
	for (let image of [
		DearImage.blank(300, 150),
		DearImage.blank(0, 100),
		DearImage.blank(100, 0),
		DearImage.blank(),
	]) {
		{
			let otherImage = DearImage.from(image);
			assert.notEqual(otherImage, image);
			assert.equal(otherImage.sizeX, image.sizeX);
			assert.equal(otherImage.sizeY, image.sizeY);
		}
		{
			let otherImage = DearImage.fromExcept(image);
			assert.equal(otherImage, image);
		}
		{
			let otherImage = await DearImage.loadFrom(image);
			assert.notEqual(otherImage, image);
			assert.equal(otherImage.sizeX, image.sizeX);
			assert.equal(otherImage.sizeY, image.sizeY);
		}
		{
			let otherImage = await DearImage.loadFromExcept(image);
			assert.equal(otherImage, image);
		}
	}
	{
		let image = DearImage.blank(300, 150);
		for (let value of [
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
