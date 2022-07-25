import assert from "assert";
import fromWhere from "../fromWhere";
describe("The FromWhere function", function () {
  it("should check which registration belongs from where", function () {
    assert.equal(fromWhere("CY"), "Bellville");
    assert.equal(fromWhere("CJ"), "Paarl");
    assert.equal(fromWhere("CA"), "Cape Town");
    assert.equal(fromWhere("CC"), "Some other place!");
  });
});
