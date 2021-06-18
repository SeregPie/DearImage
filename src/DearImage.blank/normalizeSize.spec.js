import normalizeSize from './normalizeSize';

describe('DearImage.blank/normalizeSize', () => {
	test('valid', () => {
		expect(normalizeSize(0)).toBe(0);
		expect(normalizeSize(100)).toBe(100);
	});
	test('invalid', () => {
		for (let v of [undefined, null, false, true, NaN, Infinity, -7, 'abc', {}]) {
			expect(normalizeSize(v)).toBe(0);
		}
	});
	test('cast', () => {
		let v = 100 + 100 * Math.random();
		let r = Math.round(v);
		expect(normalizeSize(`${v}`)).toBe(r);
		expect(normalizeSize(`${r}`)).toBe(r);
		expect(normalizeSize(v)).toBe(r);
	});
});
