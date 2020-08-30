let assert = require('assert').strict;

let DearImage = require('../../');

module.exports = function() {
	for (let image of [
		DearImage.blank(300, 150),
		DearImage.blank(0, 100),
		DearImage.blank(100, 0),
	]) {
		let scalingX = 3/2;
		let scalingY = 2/3;
		let otherImage = image.rescale(scalingX, scalingY);
		assert.equal(otherImage.sizeX, Math.round(image.sizeX * scalingX));
		assert.equal(otherImage.sizeY, Math.round(image.sizeY * scalingY));
	}
	{
		let image = DearImage.blank();
		let scalingX = 3/2;
		let scalingY = 2/3;
		let otherImage = image.rescale(scalingX, scalingY);
		assert.equal(otherImage, image);
	}
	for (let image of [
		DearImage.blank(300, 150),
		DearImage.blank(0, 100),
		DearImage.blank(100, 0),
		DearImage.blank(),
	]) {
		let otherImage = image.rescale(1, 1);
		assert.equal(otherImage, image);
	}
	for (let image of [
		DearImage.blank(300, 150),
		DearImage.blank(0, 100),
		DearImage.blank(100, 0),
	]) {
		let otherImage = image.rescale(0, 0);
		assert.equal(otherImage.sizeX, 0);
		assert.equal(otherImage.sizeY, 0);
	}
	{
		let image = DearImage.blank();
		let otherImage = image.rescale(0, 0);
		assert.equal(otherImage, image);
	}
};
