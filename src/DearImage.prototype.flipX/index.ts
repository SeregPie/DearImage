//import '../DearImage.prototype.flip';
import DearImage from '../DearImage';

declare module '../DearImage' {
  class DearImage {
		flipX(): DearImage;
  }
}

DearImage.prototype.flipX = function() {
	return this.flip(true, false);
};
