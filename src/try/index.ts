import { Left } from '../either/left';
import { Right } from '../either/right';
import { Either } from '../either';

export class Try {
  public static catch<T>(func: () => T): Right<T>;
  public static catch<T>(func: () => T): Left<Error>;

  public static catch<T>(func: () => T): Left<Error> | Right<T> {
    try {
      return Right.from<T>(func());
    } catch (error) {
      return Left.from(error);
    }
  }

  public static parseNumber(value: string): Right<number>;
  public static parseNumber(value: string): Left<string>;

  public static parseNumber(value: string): Left<string> | Right<number> {
    return Either.fromNan(value.replace(',', '.'));
  }
}
