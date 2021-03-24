import { preOrderTranversalRecursion } from '../../tranversal/pre-order';

describe('pre order test suite:', () => {
  it('module import:', () => {
    expect(preOrderTranversalRecursion).toBeInstanceOf(Function);
  });

  it('preorder test:', () => {
    const arr: number[] = [];
    const cb = (value: number) => {
      arr.push(value);
    }
  
    const bt = {
      value: 100,
      left: null,
      right: null,
    }
    preOrderTranversalRecursion<number>(bt, cb);
    expect(arr).toEqual([100])
  });

})
