import normalizeSize from './normalizeSize';

describe('DearImage.blank/normalizeSize', () => {
	it('should pass valid value', () => {
		expect(normalizeSize(0)).toBe(0);
		expect(normalizeSize(100)).toBe(100);
	});

	it('should return default if value invalid', () => {
		for (let v of [undefined, null, false, true, Number.NaN, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, -7, '42x', [], {}]) {
			expect(normalizeSize(v)).toBe(0);
		}
	});

	it('should cast value', () => {
		expect(normalizeSize('4.3')).toBe(4);
		expect(normalizeSize('4.8')).toBe(5);
		expect(normalizeSize(4.3)).toBe(4);
		expect(normalizeSize(4.8)).toBe(5);
	});
});
