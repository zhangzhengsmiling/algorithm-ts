import Matrix from '@/common/math/Matrix';

describe('math toolkit: Matrix', () => {
  it('module import:', () => {
    expect(Matrix).toBeInstanceOf(Function);
  });

  it('instantiation:', () => {
    const matrix = Matrix.of([
      [1, 1, 1],
      [2, 2, 2],
    ]);
    expect(matrix.value).toEqual([
      [1, 1, 1],
      [2, 2, 2]
    ]);
    expect(matrix.row).toBe(2);
    expect(matrix.col).toBe(3);
    expect(matrix).toBeInstanceOf(Matrix);
  });

  it('unsuccess instantiation:', () => {
    try {
      Matrix.of(
        [
          [1, 2],
          [3, 4, 5],
        ]
      );
    } catch (error) {
      expect(error.message).toBe('输入数据不合法');
    }

    try {
      Matrix.of(
        [] as Array<number[]>
      );
    } catch (error) {
      expect(error.message).toBe('输入不是二维数组');
    }
  });

  it('matrix clone:', () => {
    const m = Matrix.of([
      [1, 2, 3],
      [4, 5, 6]
    ]);
    const mClone = m.clone();
    expect(m === mClone).toBeFalsy();
    expect(m).toEqual(mClone);
  });

  it('matrix multiple:', () => {
    const m1 = Matrix.of([
      [1, 2, 5],
      [3, 4, 6]
    ]);

    const m2 = Matrix.of([
      [1, 2],
      [3, 4],
      [5, 6]
    ]);
    const result = m1.multiple(m2);
    expect(result).toEqual(Matrix.of([
      [32, 40],
      [45, 58]
    ]));
    expect(m1).toEqual(Matrix.of([
      [1, 2, 5],
      [3, 4, 6]
    ]));
    expect(m2).toEqual(Matrix.of([
      [1, 2],
      [3, 4],
      [5, 6]
    ]));

    // 行列不匹配
    try {
      m1.multiple(
        Matrix.of([
          [1, 2, 3, 4],
          [4, 5, 6, 7]
        ])
      );
    } catch(error) {
      expect(error.message).toBe('参数不合法');
    }
  });
});
