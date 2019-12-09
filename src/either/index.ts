import { Left as LeftType, Right as RightType } from '../definitions';

export const Right = <T>(value): RightType<T> => ({
  map: (func) => Right(func(value)),
  chain: (func) => func(value),
  fold: (left, right) => right(value),
  toString: `Right(${value})`,
});

export const Left = <T>(value): LeftType<T> => ({
  map: (func) => Left(value),
  chain: (chainedValue) => Left(chainedValue),
  fold: (left, right) => left(value),
  toString: `Left(${value})`,
});
