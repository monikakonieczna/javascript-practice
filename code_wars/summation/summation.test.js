import { assert as _assert } from "chai";
const assert = _assert;
import summation from "./summation";

describe("Summation function", () => {
    it("return summation of every number from 1 to num", () => {
        assert.strictEqual(summation(1), 1);
        assert.strictEqual(summation(2), 3);
        assert.strictEqual(summation(8), 36);
    })
})