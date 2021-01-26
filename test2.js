let {Canvas} = require('canvas');

let canvas = new Canvas(100, 100);

let ctx = canvas.getContext('2d');

{
	ctx.font = 'BOLD aaa 10px Arial';
	console.log(ctx.font);
}

{
	console.log(ctx.fillStyle);
	ctx.fillStyle = ctx.createLinearGradient(0, 0, 0, 0);
	console.log(ctx.fillStyle);
	ctx.fillStyle = '';
	console.log(ctx.fillStyle);
	ctx.fillStyle = '#fff';
	console.log(ctx.fillStyle);
	ctx.fillStyle = 'rgba(255,255)';
	console.log(ctx.fillStyle);
}
