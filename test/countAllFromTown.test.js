import assert from "assert";
import allFromTown from "../countAllFromTown";
describe("The count all from town function", function () {
  it("should count how many from town", function () {
    var fromStellies = allFromTown("CL 124,CY 567,CL 345, CJ 456,CL 341", "CL");
    assert.deepEqual(fromStellies, ["CL 124", "CL 345", "CL 341"]);

    var fromStellies = allFromTown("CL 124,CY 567,CL 345, CJ 456,CL 341", "CJ");
    assert.deepEqual(fromStellies, ["CJ 456"]);

    var fromKuilsriver = allFromTown(
      "CL 124,CY 567,CL 345, CJ 456,CL 341",
      "CF"
    );
    assert.deepEqual(fromKuilsriver, []);
  });
});
