import assert from "assert";
import isWeekday from "../isWeekday";
describe("The Weekday function", function () {
  it("should determine that is this Weekday", function () {
    assert.equal(isWeekday("Saturday"), false);
    assert.equal(isWeekday("Sunday"), false);
    assert.equal(isWeekday("Monday"), true);
    assert.equal(isWeekday("Tuesday"), true);
    assert.equal(isWeekday("Wednesday"), true);
    assert.equal(isWeekday("Thursday"), true);
    assert.equal(isWeekday("Friday"), true);
  });
});
