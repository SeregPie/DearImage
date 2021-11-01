class DearImage {
    constructor(context) {
        this.context = context;
    }
    static is(value) {
        return value instanceof this;
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

DearImage.prototype.foo = function (sizeX, sizeY) {
    return sizeX + sizeY;
};

const b = {};
const image = new DearImage(b);
const a = image.foo(1, 2);

export { a, DearImage as default };
