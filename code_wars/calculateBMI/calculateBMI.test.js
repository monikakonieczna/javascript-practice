import bmi from "./calculateBMI";
import { assert as _assert } from "chai";
const assert = _assert;

describe('calculate BMI function', () => {
    test('returns Normal if BMI is less or euquals 25.0', () => {
        assert.deepEqual(bmi(80, 1.80), "Normal");
    });

})