import assert from "assert";
import findItemsOver from "../findItemsOver";
describe("The findItemsOver function", function () {
  it("should check which list make over items", function () {
    assert.deepEqual(results, findItemsOver(itemList, 20));
    assert.deepEqual(results2, findItemsOver(itemList2, 20));
    assert.deepEqual(results3, findItemsOver(itemList3, 20));
  });
});
