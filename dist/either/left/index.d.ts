import { Returnable } from '../../definitions';
export declare class Left<T> {
    readonly value: T;
    constructor(value: T);
    static from<V>(value: V): Left<V>;
    map<V>(func: Returnable<T, V>): Left<T>;
    chain<V>(func: Returnable<T, V>): Left<T>;
    fold<V>(left: Returnable<T, V>, right: Returnable<V, V>): V;
    get toString(): string;
}
