import Matrix from '../matrix';

describe('matrix:', () => {
  it('module import:', () => {
    expect(Matrix).toBeInstanceOf(Function);
  });

  it('initial a matrix', () => {
    const matrix = new Matrix(2, 2);
    expect(matrix.value).toEqual([[0, 0], [0, 0]]);
    expect(matrix.rows).toBe(2);
    expect(matrix.cols).toBe(2);
  });

  it('set value rows or cols not match:', () => {
    const matrix = new Matrix(2, 2);
    try {
      matrix.set([
        [1, 2, 3],
        [4, 5, 6],
      ]);
    } catch (error) {
      expect(error.message).toBe('cols not matched...');
    }
    try {
      matrix.set([
        [1, 2],
        [3, 4],
        [5, 6],
      ]);
    } catch (error) {
      expect(error.message).toBe('rows not matched...');
    }

    matrix.set([
      [2, 2],
      [4, 4],
    ]);
    expect(matrix.value).toEqual([
      [2, 2],
      [4, 4],
    ]);

  });

  it('matrix multiple:', () => {
    const m1 = new Matrix(2, 3);
    m1.set([
      [1, 2, 3],
      [4, 5, 6],
    ]);
    const m2 = new Matrix(2, 2);
    m2.set([
      [1, 2],
      [3, 4],
    ]);

    try {
      m1.multiple(m2);
    } catch(error) {
      expect(error.message).toBe('not permission...');
    }
    const m3 = new Matrix(3, 2);
    m3.set([
      [1, 1],
      [2, 2],
      [3, 3],
    ]);
    const res = m1.multiple(m3);
    expect(res.rows).toBe(2);
    expect(res.cols).toBe(2);
    expect(res.value).toEqual([
      [14, 14],
      [32, 32],
    ]);
  });

  it('fast power:', () => {

    const matrix = new Matrix(2, 2);
    matrix.set([
      [2, 4],
      [4, 2]
    ]);

    const target = new Matrix(2, 2);
    target.set([
      [1, 0],
      [0, 1]
    ]);
    expect(matrix.fastPow(0)).toEqual(
      new Matrix(2, 2).set([
        [1, 0],
        [0, 1]
      ])
    );

    expect(matrix.fastPow(2)).toEqual(
      new Matrix(2, 2).set([
        [20, 16],
        [16, 20]
      ])
    );

    expect(matrix.fastPow(4)).toEqual(
      new Matrix(2, 2).set([
        [656, 640],
        [640, 656]
      ])
    );
  });
});
