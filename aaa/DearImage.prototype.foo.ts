import {DearImage} from './DearImage';

declare module "./DearImage" {
	interface DearImage {
		foo(sizeX: number, sizeY: number): number;
	}
}

DearImage.prototype.foo = function(sizeX: number, sizeY: number) {
	return sizeX + sizeY;
}
