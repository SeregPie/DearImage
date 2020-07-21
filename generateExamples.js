let DearImage = require('./index');

(async () => {
	let fontFace = {family: 'Inconsolata'};
	await DearImage.loadFontFace(fontFace, './fonts/Inconsolata.ttf');
	let font = {...fontFace, size: 16};
	{
		let image = await DearImage.loadFrom('./images/butterfly.png');
		let result = DearImage.lineLayout('x', [
			[`image`, image],
			[`image.resize(160, 120)`, image.resize(160, 120)],
		].map(([label, image]) => {
			return DearImage.lineLayout('y', [
				DearImage.text(label, {font}),
				image,
				DearImage.text(`${image.sizeX}x${image.sizeY}`, {font}),
			]);
		}), {
			gap: 10,
		});
		await result.saveToFileSystem('./examples/resize.png');
	}
	{
		let image = await DearImage.loadFrom('./images/butterfly.png');
		let result = DearImage.lineLayout('x', [
			[`image`, image],
			[`image.resizeX(120)`, image.resizeX(120)],
			[`image.resizeX(120, true)`, image.resizeX(120, true)],
		].map(([label, image]) => {
			return DearImage.lineLayout('y', [
				DearImage.text(label, {font}),
				image,
				DearImage.text(`${image.sizeX}x${image.sizeY}`, {font}),
			]);
		}), {
			gap: 10,
		});
		await result.saveToFileSystem('./examples/resizeX.png');
	}
	{
		let image = await DearImage.loadFrom('./images/butterfly.png');
		let result = DearImage.lineLayout('x', [
			[`image`, image],
			[`image.resizeY(120)`, image.resizeY(120)],
			[`image.resizeY(120, true)`, image.resizeY(120, true)],
		].map(([label, image]) => {
			return DearImage.lineLayout('y', [
				DearImage.text(label, {font}),
				image,
				DearImage.text(`${image.sizeX}x${image.sizeY}`, {font}),
			]);
		}), {
			gap: 10,
		});
		await result.saveToFileSystem('./examples/resizeY.png');
	}
	{
		let image = await DearImage.loadFrom('./images/fireworks.png');
		let result = DearImage.lineLayout('x', [
			[`image`, image],
			[`image.crop(63, 137, 210, 60)`, image.crop(63, 137, 210, 60)],
			[`image.crop(-6, 40, -92, 92)`, image.crop(-6, 40, -92, 92)],
		].map(([label, image]) => {
			return DearImage.lineLayout('y', [
				DearImage.text(label, {font}),
				image,
				DearImage.text(`${image.sizeX}x${image.sizeY}`, {font}),
			]);
		}), {
			gap: 10,
		});
		await result.saveToFileSystem('./examples/crop.png');
	}
	{
		let image = await DearImage.loadFrom('./images/meadow.png');
		let result = DearImage.lineLayout('x', [
			[`image`, image],
			[`image.reframe(160, 260)`, image.reframe(160, 260)],
			[`image.reframe(240, 200, 'start', 'end')`, image.reframe(240, 200, 'start', 'end')],
		].map(([label, image]) => {
			return DearImage.lineLayout('y', [
				DearImage.text(label, {font}),
				image,
				DearImage.text(`${image.sizeX}x${image.sizeY}`, {font}),
			]);
		}), {
			gap: 10,
		});
		await result.saveToFileSystem('./examples/reframe.png');
	}
	{
		let image = await DearImage.loadFrom('./images/pebbles.png');
		let result = DearImage.lineLayout('x', [
			[`image`, image],
			[`image.rescale(3/4, 5/3)`, image.rescale(3/4, 5/3)],
		].map(([label, image]) => {
			return DearImage.lineLayout('y', [
				DearImage.text(label, {font}),
				image,
				DearImage.text(`${image.sizeX}x${image.sizeY}`, {font}),
			]);
		}), {
			gap: 10,
		});
		await result.saveToFileSystem('./examples/rescale.png');
	}
	{
		let image = await DearImage.loadFrom('./images/pebbles.png');
		let result = DearImage.lineLayout('x', [
			[`image`, image],
			[`image.scale(2)`, image.scale(2)],
			[`image.scale(1/2)`, image.scale(1/2)],
		].map(([label, image]) => {
			return DearImage.lineLayout('y', [
				DearImage.text(label, {font}),
				image,
				DearImage.text(`${image.sizeX}x${image.sizeY}`, {font}),
			]);
		}), {
			gap: 10,
		});
		await result.saveToFileSystem('./examples/scale.png');
	}
	{
		let image = await DearImage.loadFrom('./images/duck.png');
		let result = DearImage.lineLayout('x', [
			[`image`, image],
			[`image.flipX()`, image.flipX()],
		].map(([label, image]) => {
			return DearImage.lineLayout('y', [
				DearImage.text(label, {font}),
				image,
				DearImage.text(`${image.sizeX}x${image.sizeY}`, {font}),
			]);
		}), {
			gap: 10,
		});
		await result.saveToFileSystem('./examples/flipX.png');
	}
	{
		let image = await DearImage.loadFrom('./images/duck.png');
		let result = DearImage.lineLayout('x', [
			[`image`, image],
			[`image.flipY()`, image.flipY()],
		].map(([label, image]) => {
			return DearImage.lineLayout('y', [
				DearImage.text(label, {font}),
				image,
				DearImage.text(`${image.sizeX}x${image.sizeY}`, {font}),
			]);
		}), {
			gap: 10,
		});
		await result.saveToFileSystem('./examples/flipY.png');
	}
	{
		let image = await DearImage.loadFrom('./images/duck.png');
		let result = DearImage.lineLayout('x', [
			[`image`, image],
			[`image.rotateClockwise()`, image.rotateClockwise()],
		].map(([label, image]) => {
			return DearImage.lineLayout('y', [
				DearImage.text(label, {font}),
				image,
				DearImage.text(`${image.sizeX}x${image.sizeY}`, {font}),
			]);
		}), {
			gap: 10,
		});
		await result.saveToFileSystem('./examples/rotateClockwise.png');
	}
	{
		let image = await DearImage.loadFrom('./images/duck.png');
		let result = DearImage.lineLayout('x', [
			[`image`, image],
			[`image.rotateCounterClockwise()`, image.rotateCounterClockwise()],
		].map(([label, image]) => {
			return DearImage.lineLayout('y', [
				DearImage.text(label, {font}),
				image,
				DearImage.text(`${image.sizeX}x${image.sizeY}`, {font}),
			]);
		}), {
			gap: 10,
		});
		await result.saveToFileSystem('./examples/rotateCounterClockwise.png');
	}
	{
		let image = await DearImage.loadFrom('./images/frog.png');
		let result = DearImage.lineLayout('x', [
			[`image`, image],
			[`image.scaleIn(100, 150)`, image.scaleIn(100, 150)],
		].map(([label, image]) => {
			return DearImage.lineLayout('y', [
				DearImage.text(label, {font}),
				image,
				DearImage.text(`${image.sizeX}x${image.sizeY}`, {font}),
			]);
		}), {
			gap: 10,
		});
		await result.saveToFileSystem('./examples/scaleIn.png');
	}
	{
		let image = await DearImage.loadFrom('./images/frog.png');
		let result = DearImage.lineLayout('x', [
			[`image`, image],
			[`image.scaleOut(100, 150)`, image.scaleOut(100, 150)],
		].map(([label, image]) => {
			return DearImage.lineLayout('y', [
				DearImage.text(label, {font}),
				image,
				DearImage.text(`${image.sizeX}x${image.sizeY}`, {font}),
			]);
		}), {
			gap: 10,
		});
		await result.saveToFileSystem('./examples/scaleOut.png');
	}
	{
		let image = await DearImage.loadFrom('./images/sunshine.png');
		let otherImage = await DearImage.loadFrom('./images/triangle.png');
		let result = DearImage.lineLayout('x', [
			[`image`, image],
			[`otherImage`, otherImage],
			[`image.drawForeground(otherImage)`, image.drawForeground(otherImage)],
		].map(([label, image]) => {
			return DearImage.lineLayout('y', [
				DearImage.text(label, {font}),
				image,
				DearImage.text(`${image.sizeX}x${image.sizeY}`, {font}),
			]);
		}), {
			gap: 10,
		});
		await result.saveToFileSystem('./examples/drawForeground.png');
	}
	{
		let image = await DearImage.loadFrom('./images/triangle.png');
		let result = DearImage.lineLayout('x', [
			[`image`, image],
			[`image.fillForeground('rgba(127, 234, 9, 0.7)')`, image.fillForeground('rgba(127, 234, 9, 0.7)')],
		].map(([label, image]) => {
			return DearImage.lineLayout('y', [
				DearImage.text(label, {font}),
				image,
				DearImage.text(`${image.sizeX}x${image.sizeY}`, {font}),
			]);
		}), {
			gap: 10,
		});
		await result.saveToFileSystem('./examples/fillForeground.png');
	}
	{
		let image = await DearImage.loadFrom('./images/triangle.png');
		let result = DearImage.lineLayout('x', [
			[`image`, image],
			[`image.fillBackground('rgba(127, 234, 9, 0.7)')`, image.fillBackground('rgba(127, 234, 9, 0.7)')],
		].map(([label, image]) => {
			return DearImage.lineLayout('y', [
				DearImage.text(label, {font}),
				image,
				DearImage.text(`${image.sizeX}x${image.sizeY}`, {font}),
			]);
		}), {
			gap: 10,
		});
		await result.saveToFileSystem('./examples/fillBackground.png');
	}

})();
