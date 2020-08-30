let assert = require('assert').strict;

let DearImage = require('../../');

module.exports = function() {
	let image = DearImage.blank(300, 150);
	{
		let otherImage = image.rotate(0);
		assert.equal(otherImage, image);
	}
	{
		let otherImage = image.rotate(Math.PI*2);
		assert.equal(otherImage, image);
	}
	{
		let otherImage = image.rotate(Math.PI);
		assert.equal(otherImage.sizeX, image.sizeX);
		assert.equal(otherImage.sizeY, image.sizeY);
	}
	{
		let otherImage = image.rotate(+Math.PI/2);
		assert.equal(otherImage.sizeX, image.sizeY);
		assert.equal(otherImage.sizeY, image.sizeX);
	}
	{
		let otherImage = image.rotate(-Math.PI/2);
		assert.equal(otherImage.sizeX, image.sizeY);
		assert.equal(otherImage.sizeY, image.sizeX);
	}
};
