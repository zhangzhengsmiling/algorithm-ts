import quickSelect from '../quick-select';

describe('quick select test suite,数组中第k大的元素', () => {

  it('module import:' ,() => {
    expect(quickSelect).toBeInstanceOf(Function);
  });

  it('quick select:', () => {
    const array = [1, 2, 34, 5, 6, 7,89,4]
    const ans = quickSelect(array, 0, array.length - 1, 4);
    expect(ans).toBe(5);
    expect(quickSelect(array, 0, array.length - 1, 1)).toBe(1);
    expect(quickSelect(array, 0, array.length - 1, 2)).toBe(2);
    expect(quickSelect(array, 0, array.length - 1, 8)).toBe(89);
  });
})
