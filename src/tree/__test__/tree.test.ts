import BinaryTree, { BinaryTreeNode } from '../';


describe('binary tree:', () => {

  it('module import:', () => {
    expect(BinaryTree).toBeInstanceOf(Function);
    expect(BinaryTreeNode).toBeInstanceOf(Function);
  });

  it('binary tree node:', () => {
    expect(new BinaryTreeNode<number>(100)).toEqual({
      val: 100,
      left: null,
      right: null,
    });

    expect(new BinaryTreeNode<string>('hello, world')).toEqual({
      val: 'hello, world',
      left: null,
      right: null,
    })
  });

  it('init a binary tree:', () => {
    const bh = new BinaryTree<number>();
    expect(bh.init([1, 2, 3]))
      .toEqual({
        val: 1,
        left: {
          val: 2,
          left: null,
          right: null,
        },
        right: {
          val: 3,
          left: null,
          right: null
        }
      })

    expect(bh.init([1, 2, 3, null, 4, 5]))
      .toEqual({
        val: 1,
        left: {
          val: 2,
          left: null,
          right: { val: 4, left: null, right: null }
        },
        right: {
          val: 3,
          left: { val: 5, left: null, right: null },
          right: null,
        }
      })

    try {
      bh.init([1, null, 3, 4, 5, 6]);
    } catch(err) {
      expect(err.message).toEqual('data error, please checkout tree node list...');
    }
  });

  it('binary tree preorder:', () => {
    const bh = new BinaryTree<number>();
    const tree = bh.init([1, 2, 3, 4, 5, 6, 7]);
    const temp: number[] = [];
    bh.preOrder(tree, item => {
      temp.push(item as number)
    });
    expect(temp).toEqual([1, 2, 4, 5, 3, 6, 7]);
  })
})
