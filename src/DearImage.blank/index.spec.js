import '../DearImage.prototype.toDataURL';
import DearImage from '../DearImage';

import './';

describe('DearImage.blank', () => {
	// todo: use snapshot
	it('should work', () => {
		let image = DearImage.blank(16, 8);
		expect(image.toDataURL()).toMatchSnapshot();
	});
});
