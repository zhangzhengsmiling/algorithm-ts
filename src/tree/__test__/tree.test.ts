import { isExportSpecifier } from 'typescript';
import BinaryTree, { BinaryTreeNode } from '../';


describe('binary tree:', () => {

  it('module import:', () => {
    expect(BinaryTree).toBeInstanceOf(Function);
    expect(BinaryTreeNode).toBeInstanceOf(Function);
  });

  // const bh = new BinaryTree<number>();

  it('binary tree node:', () => {
    const temp = new BinaryTreeNode<number>(100);
    expect(temp).toEqual({
      val: 100,
      left: null,
      right: null,
    })

    const temp2 = new BinaryTreeNode<string>('hello, world');
    expect(temp2).toEqual({
      val: 'hello, world',
      left: null,
      right: null,
    })
  })

  // it('init a binary tree:', () => {
  //   const bh = new BinaryTree<number>();
  //   const temp = bh.init([1, 2, 3]);
  //   expect(temp).toEqual({
  //     val: 1,
  //     left: {
  //       val: 2,
  //       left: null,
  //       right: null,
  //     },
  //     right: {
  //       val: 3,
  //       left: null,
  //       right: null
  //     }
  //   })
  // })

  // it('init a binary tree:', () => {
  //   const out = bh.init([1, 2, 3]);
  //   const root = new BinaryTreeNode(1);
  //   root.left = new BinaryTreeNode(2);
  //   root.right = new BinaryTreeNode(3);
  //   expect(out).toEqual(root);
  // })


})
