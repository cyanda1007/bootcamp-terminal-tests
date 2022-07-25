import assert from "assert";
import transportFee from "../transportFee";
describe("The transport fee function", function () {
  it("should check how much the transport will cost", function () {
    assert.equal(transportFee("morning"), "R20");

    assert.equal(transportFee("afternoon"), "R10");

    assert.equal(
      transportFee("nightshift"),
      "free",
      "for night shift return free"
    );
  });
});
