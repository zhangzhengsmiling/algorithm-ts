import { idText, isGetAccessor } from 'typescript';
import { quickPowRecursion, quickPow } from '../quick-pow';

describe('fast power:', () => {

  it('modele import:', () => {
    expect(quickPow).toBeInstanceOf(Function);
    expect(quickPowRecursion).toBeInstanceOf(Function);
  });

  it('0次幂测试:', () => {
    const base = 10;
    const n = 0;
    const result = 1;
    expect(quickPowRecursion(base, n)).toBe(result);
    expect(quickPow(base, n)).toBe(result);
  });

  it('正常测试:', () => {
    const base = 2;
    const n = 10;
    const result = 1024;
    expect(quickPowRecursion(base, n)).toBe(result);
    expect(quickPow(base, n)).toBe(result);
  });

});

