let assert = require('assert').strict;

let DearImage = require('../../');

module.exports = function() {
	for (let image of [
		DearImage.blank(300, 150),
		DearImage.blank(0, 100),
		DearImage.blank(100, 0),
		DearImage.blank(),
	]) {
		{
			let sizeX = 200;
			let sizeY = 400;
			let otherImage = image.reframeScaleIn(sizeX, sizeY);
			assert.equal(otherImage.sizeX, sizeX);
			assert.equal(otherImage.sizeY, sizeY);
		}
		{
			let otherImage = image.reframeScaleIn(image.sizeX, image.sizeY);
			assert.equal(otherImage, image);
		}
	}
};
