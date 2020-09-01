let assert = require('assert').strict;

let DearImage = require('../../');

module.exports = function() {
	for (let image of [
		DearImage.blank(300, 150),
		DearImage.blank(0, 100),
		DearImage.blank(100, 0),
	]) {
		let scaling = 3/2;
		let otherImage = image.scale(scaling);
		assert.equal(otherImage.sizeX, Math.round(image.sizeX * scaling));
		assert.equal(otherImage.sizeY, Math.round(image.sizeY * scaling));
	}
	{
		let image = DearImage.blank();
		let scaling = 3/2;
		let otherImage = image.scale(scaling);
		assert.equal(otherImage, image);
	}
	for (let image of [
		DearImage.blank(300, 150),
		DearImage.blank(0, 100),
		DearImage.blank(100, 0),
		DearImage.blank(),
	]) {
		let otherImage = image.scale(1);
		assert.equal(otherImage, image);
	}
	for (let image of [
		DearImage.blank(300, 150),
		DearImage.blank(0, 100),
		DearImage.blank(100, 0),
	]) {
		let otherImage = image.scale(0);
		assert.equal(otherImage.sizeX, 0);
		assert.equal(otherImage.sizeY, 0);
	}
	{
		let image = DearImage.blank();
		let otherImage = image.scale(0);
		assert.equal(otherImage, image);
	}
	for (let image of [
		DearImage.blank(300, 150),
		DearImage.blank(0, 100),
		DearImage.blank(100, 0),
		DearImage.blank(),
	]) {
		for (let v of [null, -7, Infinity, NaN, {}]) {
			let otherImage = image.scale(v);
			assert.equal(otherImage, image);
		}
	}
};
