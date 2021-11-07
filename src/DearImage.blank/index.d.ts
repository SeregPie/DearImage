export type SizeN = number;

declare class DearImage {
	static blank(): DearImage;
	static blank(sizeX: SizeN, sizeY: SizeN): DearImage;
	/*
	static blank(size: {x?: SizeN, y?: SizeN})
	*/
}

export default DearImage;
