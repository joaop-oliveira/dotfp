import { Returnable } from '../definitions';
export declare class Box<T> {
    readonly value: T;
    constructor(value: T);
    static from<V>(value: V): Box<V>;
    map<V>(func: Returnable<T, V>): Box<V>;
    chain<V>(func: Returnable<T, V>): V;
    fold<V>(func: Returnable<T, V>): V;
    get toString(): string;
}
