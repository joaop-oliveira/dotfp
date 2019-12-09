import { Returnable } from '../definitions';

export class Box<T> {
  constructor(public readonly value: T) {}
  public static from<V>(value: V): Box<V> {
    return new Box<V>(value);
  }
  public map<V>(func: Returnable<T, V>): Box<V> {
    return new Box(func(this.value));
  }
  public chain<V>(func: Returnable<T, V>): V {
    return func(this.value);
  }
  public fold<V>(func: Returnable<T, V>): V {
    return func(this.value);
  }
  public get toString(): string {
    return `Box(${this.value})`;
  }
}
