let assert = require('assert').strict;

let DearImage = require('../../');

module.exports = function() {
	assert.equal(DearImage.utils.isDataURL('data:image/png;base64,R0lGODdh'), true);
	assert.equal(DearImage.utils.isDataURL('data:,'), true);
	assert.equal(DearImage.utils.isDataURL('data:image/png;base64'), false);
	assert.equal(DearImage.utils.isDataURL(null), false);
};
