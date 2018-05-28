(async function() {

	let instance = await PaperDuck.load('https://i.imgur.com/JkNyq4P.jpg');
	//let instance = await PaperDuck.load('https://orig00.deviantart.net/df8b/f/2016/161/6/2/wintery_by_tatasz-da5op7z.png');
	let canvas = instance.flop().canvas;
	document.body.appendChild(canvas);

})();
