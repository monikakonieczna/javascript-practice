import check from "./check";

describe('check function', () => {
    test('returns true if array includes element', () => {
        const result = check([1, 2, 3], 2);
        expect(result).toEqual(true);
    });

    test('returns false if array does not include element', () => {
        const result = check([1, 2, 3], 4);
        expect(result).toEqual(false);
      });
})