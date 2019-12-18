import zlib from 'zlib';
import { Left } from '../either/left';
import { Right } from '../either/right';
import { Either } from '../either';

async function compress(value: any): Promise<Buffer> {
  return new Promise<Buffer>((resolve, reject) => {
    zlib.gzip(value, (error, buffer) => {
      if (error) reject(error);
      resolve(buffer);
    });
  });
}

async function uncompress(value: Buffer): Promise<any> {
  return new Promise((resolve, reject) => {
    zlib.gunzip(value, (error, data) => {
      if (error) reject(error);
      resolve(data.toString());
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

  public static gzip(value: any): Promise<Right<Buffer>>;
  public static gzip(value: any): Promise<Left<string>>;
  public static gzip(value: any): Promise<Left<string> | Right<Buffer>> {
    const stringify = JSON.stringify(value);
    return compress(stringify)
      .then((buffer) => Right.from<Buffer>(buffer))
      .catch((error) => Left.from(''));
  }

  public static gunzip(value: Buffer): Promise<Right<any>>;
  public static gunzip(value: Buffer): Promise<Left<string>>;
  public static gunzip(value: Buffer): Promise<Left<string> | Right<any>> {
    return uncompress(value)
      .then((data) => Right.from(data))
      .catch((err) => Left.from(err));
  }
}
