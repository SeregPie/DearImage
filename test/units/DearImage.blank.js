let assert = require('assert').strict;

let DearImage = require('../../');

module.exports = function() {
	{
		let image = DearImage.blank();
		assert.equal(image.sizeX, 0);
		assert.equal(image.sizeY, 0);
	}
	{
		let sizeX = 300;
		let sizeY = 150;
		let image = DearImage.blank(sizeX, sizeY);
		assert.equal(image.sizeX, sizeX);
		assert.equal(image.sizeY, sizeY);
	}
};
