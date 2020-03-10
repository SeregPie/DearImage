let assert = require('assert').strict;

let DearImage = require('../../index');

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
	for (let v of [null, -7, Infinity, NaN, {}]) {
		{
			let image = DearImage.blank(v, v);
			assert.equal(image.sizeX, 0);
			assert.equal(image.sizeY, 0);
		}
		{
			let sizeY = 200;
			let image = DearImage.blank(v, sizeY);
			assert.equal(image.sizeX, 0);
			assert.equal(image.sizeY, sizeY);
		}
		{
			let sizeX = 200;
			let image = DearImage.blank(sizeX, v);
			assert.equal(image.sizeX, sizeX);
			assert.equal(image.sizeY, 0);
		}
	}
};
