import {SizeN} from '../DearImage.blank';

export {SizeN};

export type AlignmentN = 'center' | 'start' | 'end';

declare class DearImage {
	reframe(sizeX: SizeN, sizeY: SizeN): DearImage;
	reframe(sizeX: SizeN, sizeY: SizeN, alignmentX: AlignmentN, alignmentY: AlignmentN): DearImage;
}

export default DearImage;
