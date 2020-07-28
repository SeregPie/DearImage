let assert = require('assert').strict;

let DearImage = require('../../');

module.exports = function() {
	assert(DearImage.utils.isDataURL('data:image/png;base64,R0lGODdh'));
	assert(DearImage.utils.isDataURL('data:,'));
	assert(!DearImage.utils.isDataURL('data:image/png;base64'));
	assert(!DearImage.utils.isDataURL(null));
};
