let assert = require('assert').strict;

let DearImage = require('../../');

module.exports = function() {
	{
		let image = DearImage.blank(300, 150);
		let otherImage = image.flipY();
		assert.equal(otherImage.sizeX, image.sizeX);
		assert.equal(otherImage.sizeY, image.sizeY);
	}
	for (let image of [
		DearImage.blank(0, 100),
		DearImage.blank(100, 0),
		DearImage.blank(),
	]) {
		let otherImage = image.flipY();
		assert.equal(otherImage, image);
	}
};
