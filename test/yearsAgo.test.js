import assert from "assert";
import yearsAgo from "../yearsAgo.js";
describe("The Weekday function", function () {
  it("should determine that is this Weekday", function () {
    assert.equal(new Date().getFullYear() - 1976, yearsAgo(1976));
    assert.equal(new Date().getFullYear() - 2000, yearsAgo(2000));
  });
});
