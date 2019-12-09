export type Returnable<T, R> = (value: T) => R;

export type Mappable<T> = {
  map: <R>(fn: Returnable<T, R>) => Mappable<R>;
  chain: <R>(fn: Returnable<T, R>) => R;
  toString: string;
};

export interface Box<T> extends Mappable<T> {
  fold: <R>(fn: Returnable<T, R>) => R;
}

export type Right<T> = {
  map: <R>(fn: Returnable<T, R>) => Right<R>;
  chain: <R>(fn: Returnable<T, R>) => R;
  fold: <L, R>(left: Returnable<T, L>, right: Returnable<T, R>) => R;
  toString: string;
};

export type Left<T> = {
  map: <L>(fn: Returnable<T, L>) => Left<L>;
  chain: <L>(fn: Returnable<T, L>) => Left<L>;
  fold: <L, R>(left: Returnable<T, L>, right: Returnable<T, R>) => L;
  toString: string;
};
