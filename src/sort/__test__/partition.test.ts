import { partition } from '../partition';

describe('partition test suite:', () => {
  it('module import:', () => {
    expect(partition).toBeInstanceOf(Function);
  });
  // @TODO:随机化划分算法单测，没想好怎么模拟随机数
});
