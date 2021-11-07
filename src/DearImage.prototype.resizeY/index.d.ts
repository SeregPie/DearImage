// todo: declare

import {SizeN} from '../DearImage.prototype.resizeX';

export {SizeN};

declare class DearImage {
	resizeY(sizeY: SizeN): DearImage;
	resizeY(sizeY: SizeN, proportionally: boolean): DearImage;
}

export default DearImage;
