import bfsGenerator from '../bfs-generator';

describe('bfs generator test suite:', () => {
  it('module import:', () => {
    expect(bfsGenerator).toBeInstanceOf(Function);
  });

  it('breadth-first search of tree:', () => {
    interface Tree {
      value: number;
      children: Tree[];
    }
    const temp: Tree = {
      value: 1,
      children: [{
        value: 2,
        children: [
          { value: 7, children: [] }
        ],
      }, {
        value: 3,
        children: [
          { value: 6, children: [] }
        ],
      }, {
        value: 4,
        children: [
          { value: 5, children: []}
        ],
      }]
    };
    const bfs = bfsGenerator<Tree>('children');
    expect(bfs).toBeInstanceOf(Function);
    const arr: (number | undefined)[] = [];
    bfs(temp);
    bfs(temp, (v) => arr.push(v?.value));
    expect(arr).toEqual([1, 2, 3, 4, 7, 6, 5]);
  });
});
