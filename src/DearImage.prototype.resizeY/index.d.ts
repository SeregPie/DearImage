import {SizeN} from '../DearImage.prototype.resizeX';

export {SizeN};

declare class DearImage {
	resizeY(size: SizeN): DearImage;
	resizeY(size: SizeN, proportionally: boolean): DearImage;
}

export default DearImage;
