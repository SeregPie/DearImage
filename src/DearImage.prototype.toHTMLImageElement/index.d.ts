// todo: declare

type Args = Parameters<typeof HTMLCanvasElement.prototype.toDataURL>;

declare class DearImage {
	toHTMLImageElement(...args: Args): HTMLImageElement;
}

export default DearImage;
