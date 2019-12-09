import { Returnable } from '../../definitions';

export class Right<T> {
  constructor(public readonly value: T) {}
  public static from<V>(value: V): Right<V> {
    return new Right<V>(value);
  }
  public map<V>(func: Returnable<T, V>): Right<V> {
    return new Right(func(this.value));
  }
  public chain<V>(func: Returnable<T, V>): V {
    return func(this.value);
  }
  public fold<V>(left: Returnable<T, V>, right: Returnable<T, V>): V {
    return right(this.value);
  }
  public get toString(): string {
    return `Right(${this.value})`;
  }
}
