import { assert as _assert } from "chai";
const assert = _assert;
import abbrevName0 from "./abbrevName";

describe("Abbrev Name function", () => {
    it("returns initials of given name", () => {
      assert.strictEqual(abbrevName0("Sam Harris"), "S.H");
      assert.strictEqual(abbrevName0("Patrick Feenan"), "P.F");
      assert.strictEqual(abbrevName0("Evan Cole"), "E.C");
      assert.strictEqual(abbrevName0("P Favuzzi"), "P.F");
      assert.strictEqual(abbrevName0("David Mendieta"), "D.M");
    });
  });