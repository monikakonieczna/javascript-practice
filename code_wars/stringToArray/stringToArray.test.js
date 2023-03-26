import { assert as _assert, config } from "chai";
const assert = _assert;
import stringToArray from "./stringToArray";

describe("String To Array function", () => {
  it("converts string into array of words", () => {
    assert.deepEqual(stringToArray("Robin Singh"), ["Robin", "Singh"]);
    assert.deepEqual(stringToArray("I love arrays they are my favorite"), ["I", "love", "arrays", "they", "are", "my", "favorite"]);
  });
});