import { Left } from './left';
import { Right } from './right';
import { isNull, isEmpty, isNaN } from 'lodash';
import { logIt } from '../debug';

export interface AbstractEither {
  fromNullable: <T>(value: T) => Left<string> | Right<T>;
}

export class Either {
  public static fromNullable<T>(value: T): Left<string>;
  public static fromNullable<T>(value: T): Right<T>;

  public static fromNullable<T>(value: T): Left<string> | Right<T> {
    return isNull(value) ? Left.from('nao e possivel computar um valor nullo') : Right.from<T>(value);
  }

  public static fromEmpty<T>(value: T): Left<string>;
  public static fromEmpty<T>(value: T): Right<T>;

  public static fromEmpty<T>(value: T): Left<string> | Right<T> {
    return isEmpty(value) ? Left.from('Array ou Objeto nao podem ser vazios') : Right.from<T>(value);
  }

  public static fromNan<T>(value: T): Left<string>;
  public static fromNan<T>(value: T): Right<number>;

  public static fromNan<T>(value: T): Left<string> | Right<number> {
    return Either.fromNullable<T>(value)
      .map((str) => Number(str))
      .chain((num) => (isNaN(num) ? Left.from(`Valor ${value} nao e um numero`) : Right.from(num)));
  }
}
