import assert from "assert";
import isFromBellville from "../isFromBellville";
describe("The Bellville function", function () {
  it("should determine is this registration from Bellville", function () {
    assert.equal(isFromBellville("CY 123"), true);
    assert.equal(isFromBellville("CJ 123"), false);
  });
});
