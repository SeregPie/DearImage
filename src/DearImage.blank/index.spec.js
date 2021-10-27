import '../DearImage.prototype.toDataURL';
import DearImage from '../DearImage';

import './';

describe('DearImage.blank', () => {
	it('should work', () => {
		let image = DearImage.blank(16, 8);
		expect(image.toDataURL()).toMatchSnapshot();
	});
});
