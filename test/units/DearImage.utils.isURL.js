let assert = require('assert').strict;

let DearImage = require('../../');

module.exports = function() {
	assert.equal(DearImage.utils.isURL('https://github.com/SeregPie/DearImage'), true);
	assert.equal(DearImage.utils.isURL(new URL('/SeregPie/DearImage', 'https://github.com')), true);
	assert.equal(DearImage.utils.isURL('/SeregPie/DearImage'), false);
	assert.equal(DearImage.utils.isURL(null), false);
};
