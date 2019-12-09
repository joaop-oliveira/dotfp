import { Mappable, Returnable } from '../definitions';

export const Box = <T>(value: T): Mappable<T> => ({
  map: <R>(func: Returnable<T, R>): Mappable<R> => Box(func(value)),
  chain: (func) => func(value),
  fold: (func) => func(value),
  toString: `Box(${value})`,
});
