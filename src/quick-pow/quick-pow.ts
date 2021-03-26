
/**
 * 数论，快速幂
 * @param base 
 * @param n 
 * @returns 
 */
const quickPowRecursion = (base: number, n: number): number => {
  if(n === 1) return base;
  if(n % 2 === 0) {
    const _temp = quickPowRecursion(base, n / 2);
    return _temp * _temp;
  } else {
    const _temp = quickPowRecursion(base, (n - 1) / 2);
    return base * _temp * _temp;
  }
}

const quickPow = (base: number, n: number) => {
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

const base = 2;
const n = 2000000;
const r = quickPow(base, n)
const res = quickPow(base, n);
console.log(res=== r);

// a^n = (a ^ 2) ^(n / 2)
