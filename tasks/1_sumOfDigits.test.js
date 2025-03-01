import { sumDigits } from "./1_sumOfDigits";

describe('sumDigits', () => {
    test('should return 6 for 123', () => {
        expect(sumDigits(123)).toBe(6);
    });

    test('should return 1 for 1', () => {
        expect(sumDigits(1)).toBe(1);
    });

    test('should return 15 for 567', () => {
        expect(sumDigits(567)).toBe(18);
    });

    test('should return 6 for -123', () => {
        expect(sumDigits(-123)).toBe(6);
    });
    
    test('should return 0 for 0', () => {
        expect(sumDigits(0)).toBe(0);
    });
});