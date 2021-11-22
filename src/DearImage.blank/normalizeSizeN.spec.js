import normalizeSizeN from './normalizeSizeN';

describe('DearImage.blank/normalizeSizeN', () => {
	it('should pass valid value', () => {
		expect(normalizeSizeN(1)).toBe(1);
		expect(normalizeSizeN(100)).toBe(100);
	});

	it('should return default if value undefined', () => {
		expect(normalizeSizeN()).toBe(1);
	});

	it('should throw if value invalid', () => {
		for (let v of [
			null,
			false, true,
			-7, -0, +0, Number.NaN, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY,
			'', '42x',
			[], {},
		]) {
			expect(() => {
				normalizeSizeN(v);
			}).toThrow();
		}
	});

	it('should cast value', () => {
		expect(normalizeSizeN('0.1')).toBe(1);
		expect(normalizeSizeN('2.7')).toBe(3);
		expect(normalizeSizeN('7.2')).toBe(8);
		expect(normalizeSizeN(0.1)).toBe(1);
		expect(normalizeSizeN(2.7)).toBe(3);
		expect(normalizeSizeN(7.2)).toBe(8);
	});
});
