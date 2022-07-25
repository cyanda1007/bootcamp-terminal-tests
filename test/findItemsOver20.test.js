import assert from "assert";
import findItemsOver20 from "../findItemsOver20";
describe("The findItemsOver20 function", function () {
  it("should check which list make over 20 items", function () {
    assert.deepEqual(results, findItemsOver20(itemList));
    assert.deepEqual(results2, findItemsOver20(itemList2));
    assert.deepEqual(results3, findItemsOver20(itemList3));
  });
});
