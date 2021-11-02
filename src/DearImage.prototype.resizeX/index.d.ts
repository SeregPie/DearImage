import {SizeN} from '../DearImage.prototype.resize';

export {SizeN};

declare class DearImage {
	resizeX(size: SizeN): DearImage;
	resizeX(size: SizeN, proportionally: boolean): DearImage;
}

export default DearImage;
