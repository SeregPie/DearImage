// todo: declare

type Args = Parameters<typeof HTMLCanvasElement.prototype.toDataURL>;

declare class DearImage {
	toBuffer(...args: Args): Buffer;
}

export default DearImage;
