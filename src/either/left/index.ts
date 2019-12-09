import { Returnable } from '../../definitions';

export class Left<T> {
  constructor(public readonly value: T) {}
  public static from<V>(value: V): Left<V> {
    return new Left<V>(value);
  }
  public map<V>(func: Returnable<T, V>): Left<T> {
    return new Left(this.value);
  }
  public chain<V>(func: Returnable<T, V>): Left<T> {
    return new Left(this.value);
  }
  public fold<V>(left: Returnable<T, V>, right: Returnable<V, V>): V {
    return left(this.value);
  }
  public get toString(): string {
    return `Left(${this.value})`;
  }
}
