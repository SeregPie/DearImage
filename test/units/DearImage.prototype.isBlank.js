let assert = require('assert').strict;

let DearImage = require('../../');

module.exports = function() {
	{
		let image = DearImage.blank(300, 150);
		assert.equal(image.isBlank(), true);
	}
	{
		let image = DearImage.fill('rgba(0, 0, 0, 0)', 300, 150);
		assert.equal(image.isBlank(), true);
	}
	{
		let image = DearImage.fill('ForestGreen', 0, 200);
		assert.equal(image.isBlank(), true);
	}
	{
		let image = DearImage.fill('ForestGreen', 300, 150);
		assert.equal(image.isBlank(), false);
	}
};
