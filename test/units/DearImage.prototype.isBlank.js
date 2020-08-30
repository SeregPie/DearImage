let assert = require('assert').strict;

let DearImage = require('../../');

module.exports = function() {
	{
		let image = DearImage.blank(300, 150);
		assert.equal(image.isBlank(), true);
	}
	{
		let image = DearImage.filled('rgba(0, 0, 0, 0)', 300, 150);
		assert.equal(image.isBlank(), true);
	}
	{
		let image = DearImage.filled('ForestGreen', 0, 200);
		assert.equal(image.isBlank(), true);
	}
	{
		let image = DearImage.filled('ForestGreen', 300, 150);
		assert.equal(image.isBlank(), false);
	}
};
