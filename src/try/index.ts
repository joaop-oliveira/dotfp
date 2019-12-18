import zlib from 'zlib';
import { Left } from '../either/left';
import { Right } from '../either/right';
import { Either } from '../either';

async function _compress(value: any) {
  return new Promise<Buffer>((resolve, reject) => {
    zlib.gzip(value, (error, buffer) => {
      if (error) reject(error);
      resolve(buffer);
    });
  });
}

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

  public static compress(value: any): Promise<Right<Buffer>>;
  public static compress(value: any): Promise<Left<string>>;
  public static compress(value: any): Promise<Left<string> | Right<Buffer>> {
    const stringify = JSON.stringify(value);
    return _compress(stringify)
      .then((buffer) => Right.from<Buffer>(buffer))
      .catch((error) => Left.from(''));
  }
}
