import countPositivesSumNegatives from "./countAndSum";
import { assert as _assert } from "chai";
const assert = _assert;

describe('Count Positives and Sum of Negatives function', () => {
    test('returns [] when given array is empty', () => {
        assert.deepEqual(countPositivesSumNegatives([]), []);
    });
    test('returns 2,-5 when given array is [1,3,-5]', () => {
        assert.deepEqual(countPositivesSumNegatives([1, 3, -5]), [2, -5]);
    });
})