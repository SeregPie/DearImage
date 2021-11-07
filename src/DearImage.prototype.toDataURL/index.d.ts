// todo: declare

type Args = Parameters<typeof HTMLCanvasElement.prototype.toDataURL>;

declare class DearImage {
	toDataURL(...args: Args): Buffer;
}

export default DearImage;
