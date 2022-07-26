import assert from "assert";
import isFromBellville from "../isFromBellville.js";
describe("The Bellville function", function () {
  it("should display trueif it from Bellville", function () {
    assert.equal(isFromBellville("CY 123"), true);
  });
  it("should display false if it not from Bellville", function () {
    assert.equal(isFromBellville("CJ 123"), false);
  });
});
