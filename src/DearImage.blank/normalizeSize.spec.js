import normalizeSize from './normalizeSize';

describe('DearImage.blank/normalizeSize', () => {
	it('should pass valid value', () => {
		expect(normalizeSize(1)).toBe(1);
		expect(normalizeSize(100)).toBe(100);
	});

	it('should return default if value invalid', () => {
		for (let v of [
			undefined, null,
			false, true,
			0, -7, Number.NaN, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY,
			'', '42x',
			[], {},
		]) {
			expect(normalizeSize(v)).toBe(1);
		}
	});

	it('should cast value', () => {
		expect(normalizeSize('0.1')).toBe(1);
		expect(normalizeSize('2.7')).toBe(3);
		expect(normalizeSize('7.2')).toBe(8);
		expect(normalizeSize(0.1)).toBe(1);
		expect(normalizeSize(2.7)).toBe(3);
		expect(normalizeSize(7.2)).toBe(8);
	});
});
