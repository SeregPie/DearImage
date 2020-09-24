let {Canvas} = require('canvas');

let canvas = new Canvas(100, 100);

let ctx = canvas.getContext('2d');
ctx.font = 'BOLD 10px Arial';
console.log(ctx.font);

ctx.style = 'rgba(255, 255';
console.log(ctx.style);