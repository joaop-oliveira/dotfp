import { Left } from './left';
import { Right } from './right';
export interface AbstractEither {
    fromNullable: <T>(value: T) => Left<string> | Right<T>;
}
export declare class Either {
    static fromNullable<T>(value: T): Right<T>;
    static fromNullable<T>(value: T): Left<string>;
    static fromEmpty<T>(value: T): Right<T>;
    static fromEmpty<T>(value: T): Left<string>;
    static fromNan<T>(value: T): Right<number>;
    static fromNan<T>(value: T): Left<string>;
}
