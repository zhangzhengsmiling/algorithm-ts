import insertionSort from '../../src/sort/insertion-sort';

describe('insertion sort:', () => {
  test("排序测试：", () => {
    const input = [1, 3, 5, 7, 9, 2, 4, 6, 8];
    insertionSort(input)
    expect(input).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
  })
})
