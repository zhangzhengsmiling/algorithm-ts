import Stack from '@common/structure/Stack';

describe('structure toolkit:', () => {
  it('module import:', () => {
    expect(Stack).toBeInstanceOf(Function);
  });

  it('instantiation by empty data:', () => {
    const stack = Stack.of();
    expect(stack.pop()).toBeNull();
    stack.push(1);
    expect(stack.pop()).toBe(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    expect(stack.pop()).toBe(4);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBeNull();
  });

  it ('empty:', () => {
    const stack = Stack.of();
    expect(stack.empty()).toBeTruthy();
    stack.push(1);
    expect(stack.empty()).toBeFalsy();
    stack.pop();
    expect(stack.empty()).toBeTruthy();
    stack.pop();
    expect(stack.empty()).toBeTruthy();
  });
});
