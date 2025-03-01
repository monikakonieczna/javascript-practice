import { sortArray } from "./20-sort-array";

describe('Sort Array', () => {
    test('Empty array', () => {
        expect(sortArray([])).toStrictEqual([]);
    });
    test('One element array', () => {
        expect(sortArray([1])).toStrictEqual([1]);
    })
})