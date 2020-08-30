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
			let sizeY = 200;
			let otherImage = image.resizeY(sizeY);
			assert.equal(otherImage.sizeX, image.sizeX);
			assert.equal(otherImage.sizeY, sizeY);
		}
		{
			let otherImage = image.resizeY(image.sizeY);
			assert.equal(otherImage, image);
		}
	}
	for (let image of [
		DearImage.blank(300, 150),
		DearImage.blank(0, 100),
	]) {
		let sizeY = 200;
		let otherImage = image.resizeY(sizeY, true);
		assert.equal(otherImage.sizeX, Math.round(sizeY * image.sizeX / image.sizeY));
		assert.equal(otherImage.sizeY, sizeY);
	}
	for (let image of [
		DearImage.blank(100, 0),
		DearImage.blank(),
	]) {
		let sizeY = 200;
		let otherImage = image.resizeY(sizeY, true);
		assert.equal(otherImage, image);
	}
	for (let image of [
		DearImage.blank(300, 150),
		DearImage.blank(0, 100),
	]) {
		let otherImage = image.resizeY(0, true);
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
			let otherImage = image.resizeY(image.sizeY, true);
			assert.equal(otherImage, image);
		}
	}
};
