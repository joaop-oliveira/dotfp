import { Returnable } from '../../definitions';
export declare class Right<T> {
    readonly value: T;
    constructor(value: T);
    static from<V>(value: V): Right<V>;
    map<V>(func: Returnable<T, V>): Right<V>;
    chain<V>(func: Returnable<T, V>): V;
    fold<V>(left: Returnable<T, V>, right: Returnable<T, V>): V;
    get toString(): string;
}
