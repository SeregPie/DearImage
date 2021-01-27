let DearImage = require('./index');

(async () => {
	let fontFace = {family: 'Inconsolata'};
	await DearImage.loadFontFace(fontFace, './fonts/Inconsolata.ttf');
	let font = {...fontFace, size: 16};
	{
		let image = await DearImage.loadFrom('./images/butterfly.png');
		let result = DearImage.flexLayout('x', [
			[`image`, image],
			[`image.resize(160, 120)`, image.resize(160, 120)],
		].map(([label, image]) => {
			return DearImage.flexLayout('y', [
				DearImage.text(label, {font}),
				image.drawCheckeredBackground(),
				DearImage.text(`${image.sizeX}x${image.sizeY}`, {font}),
			]);
		}), {
			gap: 10,
		});
		await result.saveToFileSystem('./examples/DearImage.prototype.resize.png');
	}
	{
		let image = await DearImage.loadFrom('./images/butterfly.png');
		let result = DearImage.flexLayout('x', [
			[`image`, image],
			[`image.resizeX(120)`, image.resizeX(120)],
			[`image.resizeX(120, true)`, image.resizeX(120, true)],
		].map(([label, image]) => {
			return DearImage.flexLayout('y', [
				DearImage.text(label, {font}),
				image.drawCheckeredBackground(),
				DearImage.text(`${image.sizeX}x${image.sizeY}`, {font}),
			]);
		}), {
			gap: 10,
		});
		await result.saveToFileSystem('./examples/DearImage.prototype.resizeX.png');
	}
	{
		let image = await DearImage.loadFrom('./images/butterfly.png');
		let result = DearImage.flexLayout('x', [
			[`image`, image],
			[`image.resizeY(120)`, image.resizeY(120)],
			[`image.resizeY(120, true)`, image.resizeY(120, true)],
		].map(([label, image]) => {
			return DearImage.flexLayout('y', [
				DearImage.text(label, {font}),
				image.drawCheckeredBackground(),
				DearImage.text(`${image.sizeX}x${image.sizeY}`, {font}),
			]);
		}), {
			gap: 10,
		});
		await result.saveToFileSystem('./examples/DearImage.prototype.resizeY.png');
	}
	{
		let image = await DearImage.loadFrom('./images/fireworks.png');
		let result = DearImage.flexLayout('x', [
			[`image`, image],
			[`image.crop(63, 137, 210, 60)`, image.crop(63, 137, 210, 60)],
			[`image.crop(-6, 40, -92, 92)`, image.crop(-6, 40, -92, 92)],
		].map(([label, image]) => {
			return DearImage.flexLayout('y', [
				DearImage.text(label, {font}),
				image.drawCheckeredBackground(),
				DearImage.text(`${image.sizeX}x${image.sizeY}`, {font}),
			]);
		}), {
			gap: 10,
		});
		await result.saveToFileSystem('./examples/DearImage.prototype.crop.png');
	}
	{
		let image = await DearImage.loadFrom('./images/meadow.png');
		let result = DearImage.flexLayout('x', [
			[`image`, image],
			[`image.reframe(160, 260)`, image.reframe(160, 260)],
			[`image.reframe(240, 200, 'start', 'end')`, image.reframe(240, 200, 'start', 'end')],
		].map(([label, image]) => {
			return DearImage.flexLayout('y', [
				DearImage.text(label, {font}),
				image.drawCheckeredBackground(),
				DearImage.text(`${image.sizeX}x${image.sizeY}`, {font}),
			]);
		}), {
			gap: 10,
		});
		await result.saveToFileSystem('./examples/DearImage.prototype.reframe.png');
	}
	{
		let image = await DearImage.loadFrom('./images/pebbles.png');
		let result = DearImage.flexLayout('x', [
			[`image`, image],
			[`image.rescale(3/4, 5/3)`, image.rescale(3/4, 5/3)],
		].map(([label, image]) => {
			return DearImage.flexLayout('y', [
				DearImage.text(label, {font}),
				image.drawCheckeredBackground(),
				DearImage.text(`${image.sizeX}x${image.sizeY}`, {font}),
			]);
		}), {
			gap: 10,
		});
		await result.saveToFileSystem('./examples/DearImage.prototype.rescale.png');
	}
	{
		let image = await DearImage.loadFrom('./images/pebbles.png');
		let result = DearImage.flexLayout('x', [
			[`image`, image],
			[`image.scale(2)`, image.scale(2)],
			[`image.scale(1/2)`, image.scale(1/2)],
		].map(([label, image]) => {
			return DearImage.flexLayout('y', [
				DearImage.text(label, {font}),
				image.drawCheckeredBackground(),
				DearImage.text(`${image.sizeX}x${image.sizeY}`, {font}),
			]);
		}), {
			gap: 10,
		});
		await result.saveToFileSystem('./examples/DearImage.prototype.scale.png');
	}
	{
		let image = await DearImage.loadFrom('./images/duck.png');
		let result = DearImage.flexLayout('x', [
			[`image`, image],
			[`image.flipX()`, image.flipX()],
		].map(([label, image]) => {
			return DearImage.flexLayout('y', [
				DearImage.text(label, {font}),
				image.drawCheckeredBackground(),
				DearImage.text(`${image.sizeX}x${image.sizeY}`, {font}),
			]);
		}), {
			gap: 10,
		});
		await result.saveToFileSystem('./examples/DearImage.prototype.flipX.png');
	}
	{
		let image = await DearImage.loadFrom('./images/duck.png');
		let result = DearImage.flexLayout('x', [
			[`image`, image],
			[`image.flipY()`, image.flipY()],
		].map(([label, image]) => {
			return DearImage.flexLayout('y', [
				DearImage.text(label, {font}),
				image.drawCheckeredBackground(),
				DearImage.text(`${image.sizeX}x${image.sizeY}`, {font}),
			]);
		}), {
			gap: 10,
		});
		await result.saveToFileSystem('./examples/DearImage.prototype.flipY.png');
	}
	{
		let image = await DearImage.loadFrom('./images/duck.png');
		let result = DearImage.flexLayout('x', [
			[`image`, image],
			[`image.rotateClockwise()`, image.rotateClockwise()],
		].map(([label, image]) => {
			return DearImage.flexLayout('y', [
				DearImage.text(label, {font}),
				image.drawCheckeredBackground(),
				DearImage.text(`${image.sizeX}x${image.sizeY}`, {font}),
			]);
		}), {
			gap: 10,
		});
		await result.saveToFileSystem('./examples/DearImage.prototype.rotateClockwise.png');
	}
	{
		let image = await DearImage.loadFrom('./images/duck.png');
		let result = DearImage.flexLayout('x', [
			[`image`, image],
			[`image.rotate(Math.PI/4)`, image.rotate(Math.PI/4)],
		].map(([label, image]) => {
			return DearImage.flexLayout('y', [
				DearImage.text(label, {font}),
				image.drawCheckeredBackground(),
				DearImage.text(`${image.sizeX}x${image.sizeY}`, {font}),
			]);
		}), {
			gap: 10,
		});
		await result.saveToFileSystem('./examples/DearImage.prototype.rotate.png');
	}
	{
		let image = await DearImage.loadFrom('./images/duck.png');
		let result = DearImage.flexLayout('x', [
			[`image`, image],
			[`image.rotateCounterClockwise()`, image.rotateCounterClockwise()],
		].map(([label, image]) => {
			return DearImage.flexLayout('y', [
				DearImage.text(label, {font}),
				image.drawCheckeredBackground(),
				DearImage.text(`${image.sizeX}x${image.sizeY}`, {font}),
			]);
		}), {
			gap: 10,
		});
		await result.saveToFileSystem('./examples/DearImage.prototype.rotateCounterClockwise.png');
	}
	{
		let image = await DearImage.loadFrom('./images/frog.png');
		let result = DearImage.flexLayout('x', [
			[`image`, image],
			[`image.scaleIn(100, 150)`, image.scaleIn(100, 150)],
		].map(([label, image]) => {
			return DearImage.flexLayout('y', [
				DearImage.text(label, {font}),
				image.drawCheckeredBackground(),
				DearImage.text(`${image.sizeX}x${image.sizeY}`, {font}),
			]);
		}), {
			gap: 10,
		});
		await result.saveToFileSystem('./examples/DearImage.prototype.scaleIn.png');
	}
	{
		let image = await DearImage.loadFrom('./images/frog.png');
		let result = DearImage.flexLayout('x', [
			[`image`, image],
			[`image.scaleOut(100, 150)`, image.scaleOut(100, 150)],
		].map(([label, image]) => {
			return DearImage.flexLayout('y', [
				DearImage.text(label, {font}),
				image.drawCheckeredBackground(),
				DearImage.text(`${image.sizeX}x${image.sizeY}`, {font}),
			]);
		}), {
			gap: 10,
		});
		await result.saveToFileSystem('./examples/DearImage.prototype.scaleOut.png');
	}
	{
		let image = await DearImage.loadFrom('./images/sunshine.png');
		let otherImage = await DearImage.loadFrom('./images/triangle.png');
		let result = DearImage.flexLayout('x', [
			[`image`, image],
			[`otherImage`, otherImage],
			[`image.drawForeground(otherImage)`, image.drawForeground(otherImage)],
		].map(([label, image]) => {
			return DearImage.flexLayout('y', [
				DearImage.text(label, {font}),
				image.drawCheckeredBackground(),
				DearImage.text(`${image.sizeX}x${image.sizeY}`, {font}),
			]);
		}), {
			gap: 10,
		});
		await result.saveToFileSystem('./examples/DearImage.prototype.drawForeground.png');
	}
	{
		let image = await DearImage.loadFrom('./images/triangle.png');
		let result = DearImage.flexLayout('x', [
			[`image`, image],
			[`image.fillForeground('rgba(127, 234, 9, 0.7)')`, image.fillForeground('rgba(127, 234, 9, 0.7)')],
		].map(([label, image]) => {
			return DearImage.flexLayout('y', [
				DearImage.text(label, {font}),
				image.drawCheckeredBackground(),
				DearImage.text(`${image.sizeX}x${image.sizeY}`, {font}),
			]);
		}), {
			gap: 10,
		});
		await result.saveToFileSystem('./examples/DearImage.prototype.fillForeground.png');
	}
	{
		let image = await DearImage.loadFrom('./images/triangle.png');
		let result = DearImage.flexLayout('x', [
			[`image`, image],
			[`image.fillBackground('rgba(127, 234, 9, 0.7)')`, image.fillBackground('rgba(127, 234, 9, 0.7)')],
		].map(([label, image]) => {
			return DearImage.flexLayout('y', [
				DearImage.text(label, {font}),
				image.drawCheckeredBackground(),
				DearImage.text(`${image.sizeX}x${image.sizeY}`, {font}),
			]);
		}), {
			gap: 10,
		});
		await result.saveToFileSystem('./examples/DearImage.prototype.fillBackground.png');
	}

})();
