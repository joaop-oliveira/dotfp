import { Left } from '../either/left';
import { Right } from '../either/right';
export declare class Try {
    static catch<T>(func: () => T): Right<T>;
    static catch<T>(func: () => T): Left<Error>;
    static parseNumber(value: string): Right<number>;
    static parseNumber(value: string): Left<string>;
}
