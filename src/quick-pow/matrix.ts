export default class Matrix {
  value: number[][];
  rows: number;
  cols: number;
  constructor(rows: number, cols: number) {
    this.rows = rows;
    this.cols = cols;
    this.value = new Array(rows)
      .fill("")
      .map(item => new Array(cols).fill(0));
  }

  fill(num: number): Matrix {
    for(let i = 0; i < this.rows; i++) {
      for(let j = 0; j < this.cols; j++) {
        this.value[i][j] = num;
      }
    }
    return this;
  }

  set(nums: number[][]) {
    const r = nums.length;
    if(r !== this.rows) throw new Error('rows not matched...');
    const c = nums[0].length;
    if(c !== this.cols) throw new Error('cols not matched...');
    this.value = nums;
    return this;
  }

  multiple(matrix: Matrix) {
    if(this.cols !== matrix.rows) throw new Error('not permission...');
    const m1 = this.value;
    const m2 = matrix.value;
    const rows = this.rows;
    const cols = matrix.cols;
    const mRes = new Array(rows).fill('')
      .map(
        item => new Array(cols)
      );
    for(let i = 0; i < rows; i++) {
      for(let j = 0; j < cols; j++) {
        let res = 0;
        for(let k = 0; k < this.cols; k++) {
          res += m1[i][k] * m2[k][j];
        }
        mRes[i][j] = res;
      }
    }
    const matrixRes = new Matrix(rows, cols);
    matrixRes.set(mRes);
    return matrixRes;
  }

  fastPow(n: number): Matrix{
    const e = [];
    if (n === 0) {
      for(let i = 0; i < this.rows; i++) {
        e[i] = new Array(this.cols).fill(0);
        for(let j = 0; j < this.cols; j++) {
          if (i === j) {
            e[i][j] = 1;
          }
        }
      }
      return new Matrix(2, 2).set(e);
    }
    const matrix: Matrix = new Matrix(
      this.rows, this.cols
    );
    matrix.set(this.value);
    if(n === 0) return matrix;
    let res: Matrix = matrix;
    while(n > 1) {
      if(n % 2 === 0) {
        res = res.multiple(res);
        n = n / 2;
      } else {
        res = matrix.multiple(res).multiple(res);
        n = (n - 1) / 2;
      }
    }
    return res;
  }
}
