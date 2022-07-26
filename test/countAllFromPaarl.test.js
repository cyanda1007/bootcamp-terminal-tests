import assert from "assert";
import countAllPaarl from "../countAllPaarl.js";
describe("The count all from Paarl function", function () {
  it("should count how many from paarl", function () {
    assert.equal(
      3,
      countAllPaarl("CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123")
    );
  });
  it("should count how many from paarl", function () {
    assert.equal(2, countAllPaarl("CJ 345 123, CK 345, CJ 123"));
  });
});
