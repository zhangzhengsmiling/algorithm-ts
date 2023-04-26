
class Stack<T> {
  private _value: T[];
  public size: number;

  private constructor(value: T[]) {
    this._value = value;
    this.size = value.length;    
  }

  static of<T>(value: T[] = []) {
    return new Stack<T>(value); 
  }

  public push(value: T) {
    this._value.push(value);
    this.size++;
  }

  public pop(): T | null {
    if (this.empty()) return null;
    this.size--;
    return this._value.pop();
  }

  public empty() {
    return this.size === 0;
  }

  public get value() {
    return this._value;
  }

}

export default Stack;
