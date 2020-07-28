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
			let otherImage = image.reframe(sizeX, sizeY);
			assert.equal(otherImage.sizeX, sizeX);
			assert.equal(otherImage.sizeY, sizeY);
		}
		{
			let otherImage = image.reframe(image.sizeX, image.sizeY);
			assert.equal(otherImage, image);
		}
		for (let v of [null, -7, Infinity, NaN, {}]) {
			{
				let otherImage = image.reframe(v, v);
				assert.equal(otherImage, image);
			}
			{
				let sizeY = 200;
				let otherImage = image.reframe(v, sizeY);
				assert.equal(otherImage.sizeX, image.sizeX);
				assert.equal(otherImage.sizeY, sizeY);
			}
			{
				let sizeX = 200;
				let otherImage = image.reframe(sizeX, v);
				assert.equal(otherImage.sizeX, sizeX);
				assert.equal(otherImage.sizeY, image.sizeY);
			}
		}
	}
};
