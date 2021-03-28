class Matrix {
  value: number[][];
  rows: number;
  cols: number;
  constructor(rows: number, cols: number) {
    this.rows = rows;
    this.cols = cols;
    this.value = new Array(rows)
      .fill("")
      .map(item => new Array(cols));
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
    
  }
}

const matrix = new Matrix(2, 2);
matrix.set([
  [10, 10],
  [2, 2]
])

console.log(matrix.value);
