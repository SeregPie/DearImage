// todo: declare

import {SizeN} from '../DearImage.prototype.resize';

export {SizeN};

declare class DearImage {
	resizeX(sizeX: SizeN): DearImage;
	resizeX(sizeX: SizeN, proportionally: boolean): DearImage;
}

export default DearImage;
