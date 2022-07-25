import assert from "assert";
import greet from "../greet.js";
describe("The greet function", function () {
  it("should greet a person name", function () {
    assert.equal(greet("Bob"), "Hello, Bob");
    assert.equal(greet("Sam"), "Hello, Sam");
  });
});
