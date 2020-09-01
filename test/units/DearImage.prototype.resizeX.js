let assert = require('assert').strict;

let DearImage = require('../../');

module.exports = function() {
	for (let image of [
		DearImage.blank(300, 150),
		DearImage.blank(0, 100),
		DearImage.blank(100, 0),
		DearImage.blank(),
	]) {
		{
			let sizeX = 200;
			let otherImage = image.resizeX(sizeX);
			assert.equal(otherImage.sizeX, sizeX);
			assert.equal(otherImage.sizeY, image.sizeY);
		}
		{
			let otherImage = image.resizeX(image.sizeX);
			assert.equal(otherImage, image);
		}
		for (let v of [null, -7, Infinity, NaN, {}]) {
			let otherImage = image.resizeX(v);
			assert.equal(otherImage, image);
		}
	}
	for (let image of [
		DearImage.blank(300, 150),
		DearImage.blank(100, 0),
	]) {
		let sizeX = 200;
		let otherImage = image.resizeX(sizeX, true);
		assert.equal(otherImage.sizeX, sizeX);
		assert.equal(otherImage.sizeY, Math.round(sizeX * image.sizeY / image.sizeX));
	}
	for (let image of [
		DearImage.blank(0, 100),
		DearImage.blank(),
	]) {
		let sizeX = 200;
		let otherImage = image.resizeX(sizeX, true);
		assert.equal(otherImage, image);
	}
	for (let image of [
		DearImage.blank(300, 150),
		DearImage.blank(100, 0),
	]) {
		let otherImage = image.resizeX(0, true);
		assert.equal(otherImage.sizeX, 0);
		assert.equal(otherImage.sizeY, 0);
	}
	for (let image of [
		DearImage.blank(300, 150),
		DearImage.blank(100, 0),
		DearImage.blank(0, 100),
		DearImage.blank(),
	]) {
		{
			let otherImage = image.resizeX(image.sizeX, true);
			assert.equal(otherImage, image);
		}
		for (let v of [null, -7, Infinity, NaN, {}]) {
			let otherImage = image.resizeX(v, true);
			assert.equal(otherImage, image);
		}
	}
};
