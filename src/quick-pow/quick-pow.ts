
/**
 * 数论，快速幂
 * @param base 
 * @param n 
 * @returns 
 */
export const quickPowRecursion = (base: number, n: number): number => {
  if(n === 0) return 1; 
  if(n === 1) return base;
  if(n % 2 === 0) {
    const _temp = quickPowRecursion(base, n / 2);
    return _temp * _temp;
  } else {
    const _temp = quickPowRecursion(base, (n - 1) / 2);
    return base * _temp * _temp;
  }
}

export const quickPow = (base: number, n: number) => {
  if(n === 0) return 1;
  let res = base;
  while(n > 1) {
    if(n % 2 === 0) {
      res = res * res;
      n = n / 2;
    } else {
      res = base * res * res;
      n = (n - 1) / 2;
    }
  }
  return res;
}
