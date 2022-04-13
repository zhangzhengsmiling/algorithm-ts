import Matrix from './Matrix';

export default class SquareMatrix extends Matrix {
  private __rank: number;
  get rank() {
    return this.__rank;
  }
  constructor(value: Array<number[]>){
    super(value);
    this.__rank = this.row;
  }

  protected static check(value: Array<number[]>) {
    if(!super.check(value)) return false;
    const isSquare = value.length === value[0].length
    if(!isSquare) throw new Error('无法构成方阵');
    return true;
  }

  public static of(value: Array<number[]>) {
    this.check(value);
    return new SquareMatrix(value);
  }

  public static identity(n: number): SquareMatrix {
    const matrix = new Array(n).fill('').map(() => new Array(n).fill(0));
    matrix.forEach((row, rowIndex) => {
      row.forEach((_, colIndex) => {
        if (rowIndex === colIndex) {
          matrix[rowIndex][colIndex] = 1;
        }
      })
    })
    return SquareMatrix.of(matrix);
  }

  public static fastPow(base: SquareMatrix, exponent: number) {
    let resultMatrix = SquareMatrix.identity(base.row);
    while(exponent) {
      if (exponent & 1) resultMatrix = SquareMatrix.of(resultMatrix.multiple(base).value);
      base = SquareMatrix.of(base.multiple(base).value);
      exponent >>= 1;
    }
    return resultMatrix;
  }
}