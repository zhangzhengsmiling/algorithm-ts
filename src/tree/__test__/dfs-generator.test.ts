import dfsGenerator from '../dfs-generator';

describe('dfs generator test suite:', () => {
  it('module import:', () => {
    expect(dfsGenerator).toBeInstanceOf(Function);
  })

  it('depth-first search:', () => {
    interface Tree {
      value: number;
      children: Tree[];
    }
    const temp: Tree = {
      value: 1,
      children: [
        {
          value: 2,
          children: [
            { value: 7, children: [] }
          ],
        },
        {
          value: 3,
          children: [
            { value: 6, children: [] }
          ],
        },
        {
          value: 4,
          children: [
            { value: 5, children: []}
          ],
        }
      ]
    }
    const dfs = dfsGenerator<Tree>('children');
    expect(dfs).toBeInstanceOf(Function);
    const arr: (number | undefined)[] = [];
    dfs(temp);
    dfs(temp, (v) => {
      arr.push(v?.value);
    });
    expect(arr).toEqual([1, 2, 7, 3, 6, 4, 5]);
  })
})
