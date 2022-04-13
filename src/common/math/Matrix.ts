
export default class Matrix {
  private __value: Array<number[]>;
  private __row:number;
  private __col: number;
  protected constructor(value: Array<number[]>) {
    this.__value = value;
    this.__row = value.length;
    this.__col = value[0].length;
  }
  public get value() {
    return this.__value;
  }

  public get row() {
    return this.__row;
  }

  public get col() {
    return this.__col;
  }

  public multiple(m: Matrix) {
    if (this.col !== m.row) throw Error('参数错误')
    const resultArr = new Array(this.row)
      .fill('')
      .map(() => new Array(m.col).fill(0));
    resultArr.forEach((row, rowIndex) => {
      row.forEach((_, colIndex) => {
        resultArr[rowIndex][colIndex] = 0;
        for(let i = 0; i < this.col; i++) {
          resultArr[rowIndex][colIndex] += this.value[rowIndex][i] * m.value[i][colIndex];
        } 
      })
    })
    return Matrix.of(resultArr);
  }

  public clone() {
    return Matrix.of(this.value);
  }

  protected static check(input: Array<number[]>) {
    const row1 = input[0];
    if (!Array.isArray(row1)) throw new Error('输入不是二维数组');
    const len = row1.length;
    if(!input.every(row => row.length === len))
      throw new Error('输入数据不合法');
    return true;
  }

  public static of(array: Array<number[]>) {
    if(!Matrix.check(array)) return new Matrix([[0]]);
    return new Matrix(array);
  }

}
