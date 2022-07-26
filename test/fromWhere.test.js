import assert from "assert";
import fromWhere from "../fromWhere.js";
describe("The FromWhere function", function () {
  it("should check which registration belongs from where", function () {
    assert.equal(fromWhere("CY"), "Bellville");
  });
  it("should check which registration belongs from where", function () {
    assert.equal(fromWhere("CJ"), "Paarl");
  });
  it("should check which registration belongs from where", function () {
    assert.equal(fromWhere("CA"), "Cape Town");
  });
  it("should check which registration belongs from where", function () {
    assert.equal(fromWhere("CC"), "Some other place!");
  });
});
