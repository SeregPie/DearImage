export default class {
	constructor(context) {
		this.context = context;
	}

	get canvas() {
		return this.context.canvas;
	}

	get width() {
		return this.canvas.width;
	}

	get height() {
		return this.canvas.height;
	}
}
