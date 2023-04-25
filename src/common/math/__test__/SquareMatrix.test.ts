import SquareMatrix from '@common/math/SquareMatrix';

describe('math: square matrix', () => {
  it('module import:', () => {
    expect(SquareMatrix).toBeInstanceOf(Function);
  });

  it('instantiation:', () => {
    const sm = SquareMatrix.of([
      [2, 2],
      [3, 3],
    ]);
    expect(sm).toBeInstanceOf(SquareMatrix);
    expect(sm.value).toEqual([
      [2, 2],
      [3, 3]
    ]);
    expect(sm.row).toBe(2);
    expect(sm.col).toBe(2);
    expect(sm.rank).toBe(2);
  });

  it('unsuccessful instantiation:', () => {
    try {
      SquareMatrix.of([
        [1],
        [2, 3]
      ]);
    } catch(error) {
      expect(error.message).toBe('输入数据不合法');
    }

    try {
      SquareMatrix.of([] as Array<number[]>);
    } catch(error) {
      expect(error.message).toBe('输入不是二维数组');
    }

    try {
      SquareMatrix.of([
        [1, 2, 3],
        [4, 5, 6]
      ]);
    } catch (error) {
      expect(error.message).toBe('无法构成方阵');
    }
  });

  it('identity matrix:', () => {
    const identity = SquareMatrix.identity(3);
    expect(identity).toEqual(SquareMatrix.of([
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ]));
  });

  it('matrix fast pow:', () => {
    const m = SquareMatrix.of([
      [1, 1],
      [1, 0]
    ]);
    expect(SquareMatrix.fastPow(m, 0)).toEqual(SquareMatrix.identity(2));
    expect(SquareMatrix.fastPow(m, 1)).toEqual(SquareMatrix.of([
      [1, 1],
      [1, 0]
    ]));
    expect(SquareMatrix.fastPow(m, 2)).toEqual(SquareMatrix.of([
      [2, 1],
      [1, 1]
    ]));
    expect(SquareMatrix.fastPow(m, 3)).toEqual(SquareMatrix.of([
      [3, 2],
      [2, 1]
    ]));
  });
});
