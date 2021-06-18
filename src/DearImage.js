export default class {
	static is(value) {
		return value instanceof this;
	}
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
	get sizeX() {
		return this.width;
	}
	get sizeY() {
		return this.height;
	}
}
