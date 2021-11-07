// todo: declare

type Args = Parameters<typeof HTMLCanvasElement.prototype.toDataURL>;

declare class DearImage {
	toFileSystem(target: string, ...args: Args): Promise<void>;
}

export default DearImage;
