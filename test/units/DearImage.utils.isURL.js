let assert = require('assert').strict;

let DearImage = require('../../index');

module.exports = function() {
	assert(DearImage.utils.isURL('https://github.com/SeregPie/DearImage'));
	assert(DearImage.utils.isURL(new URL('/SeregPie/DearImage', 'https://github.com')));
	assert(!DearImage.utils.isURL('/SeregPie/DearImage'));
	assert(!DearImage.utils.isURL(null));
};
