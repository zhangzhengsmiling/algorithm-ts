import { preOrderTransversalRecursion, preOrderTransversal, BinaryTree } from '../../transversal/pre-order';

describe('pre order recursion test suite:', () => {

  const binaryTree: BinaryTree<number> = {
    value: 100,
    left: {
      value: 200,
      left: {
        value: 300,
        left: {
          value: 700,
          left: null,
          right: null,
        },
        right: {
          value: 400,
          left: null,
          right: null
        }
      },
      right: null,
    },
    right: {
      value: 500,
      left: null,
      right: {
        value: 600,
        left: null,
        right: null,
      }
    }
  }

  it('module import:', () => {
    expect(preOrderTransversalRecursion).toBeInstanceOf(Function);
    expect(preOrderTransversal).toBeInstanceOf(Function);
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
    preOrderTransversalRecursion<number>(bt, cb);
    expect(arr).toEqual([100])
  });

  it('preorder recursion:', () => {
    const res = new Array<number>();
    preOrderTransversalRecursion(binaryTree, d => res.push(d));
    expect(res).toEqual([100, 200, 300, 700, 400, 500, 600])
  });

  it('preorder recursion:', () => {
    const res = new Array<number>();
    preOrderTransversal(binaryTree, d => res.push(d));
    expect(res).toEqual([100, 200, 300, 700, 400, 500, 600])
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
    preOrderTransversal<number>(bt, cb);
    expect(arr).toEqual([100])
  });

})
