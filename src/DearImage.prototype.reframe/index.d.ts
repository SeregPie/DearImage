// todo: declare

import {SizeN} from '../DearImage.blank';

export {SizeN};

export type AlignmentN = 'center' | 'start' | 'end';

declare class DearImage {
	reframe(sizeX: SizeN, sizeY: SizeN): DearImage;
	reframe(sizeX: SizeN, sizeY: SizeN, alignmentX: AlignmentN, alignmentY: AlignmentN): DearImage;

	/*
	???
	reframe(sizeX: SizeN, sizeY: SizeN, alignment: {x?: AlignmentN, y?: AlignmentN})
	reframe(size: {x?: SizeN, y?: SizeN})
	reframe(size: {x?: SizeN, y?: SizeN}, alignment: {x?: AlignmentN, y?: AlignmentN})
	reframe({size: {x?: SizeN, y?: SizeN}, alignment: {x?: AlignmentN, y?: AlignmentN}})
	*/
}

export default DearImage;
