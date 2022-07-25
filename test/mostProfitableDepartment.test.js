import assert from "assert";
import mostProfitableDepartment from "../mostProfitableDepartment";
describe("The most profitable department function", function () {
  it("should check which department makes a profit", function () {
    assert.equal(
      "outdoor",
      mostProfitableDepartment(salesData),
      "Most profitable department is 'outdoor' for dataset 1"
    );
    assert.equal(
      "electronics",
      mostProfitableDepartment(salesData2),
      "Most profitable department is 'electronics' for dataset 2"
    );

    assert.equal(
      "Thursday",
      mostProfitableDay(salesData),
      "Most profitable day is 'Thursday' for dataset 1"
    );
    assert.equal(
      "Wednesday",
      mostProfitableDay(salesData2),
      "Most profitable day is 'Wednesday' for dataset 2"
    );
  });
});
