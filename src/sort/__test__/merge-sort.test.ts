import mergeSort from '../merge-sort';


describe('merge sort test suites:', () => {
  it('sort test', () => {
    const ds = [4, 5, 6, 1, 2, 3]
    const res = mergeSort(ds);
    expect(res).toEqual([1, 2, 3, 4, 5, 6]);
  })
})