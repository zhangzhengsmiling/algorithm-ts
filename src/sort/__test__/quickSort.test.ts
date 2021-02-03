import { isFunctionLike } from 'typescript';
import quickSort from '../quick-sort';

describe('quick sort test suites:', () => {
  it('module import:', () => {
    expect(quickSort).toBeInstanceOf(Function);
  })

  it('sort test:', () => {
    const array = [18, 23, 46, 5, 32, 45, 44, 3, 24];
    quickSort(array, 0, array.length - 1);
    expect(array).toEqual([3, 5, 18, 23, 24, 32, 44, 45, 46]);
  });

  it('空数组排序:', () => {
    const array: number[] = [];
    quickSort(array, 0, array.length - 1);
    expect(array).toEqual([]);
  });

  it('局部排序测试:', () => {
    const array = [18, 23, 46, 5, 32, 45, 44, 3, 24];
    quickSort(array, 1, 6);
    expect(array).toEqual([18, 5, 23, 32, 44, 45, 46, 3, 24]);
  })
})
