export type SizeN = number;

declare class DearImage {
	static blank(): DearImage;
	static blank(sizeX: SizeN, sizeY: SizeN): DearImage;
}

export default DearImage;
