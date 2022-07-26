import assert from "assert";
import totalPhoneBill from "../totalPhoneBill.js";
describe("The total phone bill function", function () {
  it("should check the total phone bill cost", function () {
    assert.equal("R7.45", totalPhoneBill("call, sms, call, sms, sms"));
  });
  it("should check the total phone bill cost", function () {
    assert.equal("R3.40", totalPhoneBill("call, sms"));
  });
  it("should check the total phone bill cost", function () {
    assert.equal("R1.30", totalPhoneBill("sms, sms"));
  });
});
