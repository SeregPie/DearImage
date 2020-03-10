let assert = require('assert').strict;

let DearImage = require('../../index');

module.exports = function() {
	for (let image of [
		DearImage.blank(300, 150),
		DearImage.blank(0, 100),
		DearImage.blank(100, 0),
		DearImage.blank(),
	]) {
		{
			let sizeX = 400;
			let sizeY = 200;
			let otherImage = image.crop(0, 0, sizeX, sizeY);
			assert.equal(otherImage.sizeX, sizeX);
			assert.equal(otherImage.sizeY, sizeY);
		}
		{
			let sizeX = 400;
			let sizeY = 200;
			let otherImage = image.crop(image.sizeX / 2, image.sizeY / 2, sizeX, sizeY);
			assert.equal(otherImage.sizeX, sizeX);
			assert.equal(otherImage.sizeY, sizeY);
		}
		{
			let otherImage = image.crop(0, 0, image.sizeX, image.sizeY);
			assert.equal(otherImage, image);
		}
		{
			let otherImage = image.crop(image.sizeX, image.sizeY, -image.sizeX, -image.sizeY);
			assert.equal(otherImage, image);
		}
		for (let v of [null, Infinity, NaN, {}]) {
			let otherImage = image.crop(v, v, v, v);
			assert.equal(otherImage, image);
		}
	}
};
