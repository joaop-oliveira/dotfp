import { isNull, isEmpty } from 'lodash';
import { Left, Right } from '../either';
import { Left as LefType, Right as RightType, Mappable } from 'src/definitions';

export function fromNullable<L, R, T>(value: T): LefType<L>;
export function fromNullable<L, R, T>(value: T): RightType<R>;
export function fromNullable<L, R, T>(value: T): LefType<L> | RightType<R> {
  return isNull(value) ? Left<L>('Parametro informado nao pode ser null') : Right<R>(value);
}

export function fromEmptyArray<L, R, T>(value: T): RightType<R>;
export function fromEmptyArray<L, R, T>(value: T): LefType<L>;
export function fromEmptyArray<L, R, T>(value: T): LefType<L> | RightType<R> {
  return isEmpty(value) ? Left<L>('Erro Array nao pode ser vazia') : Right<R>(value);
}

export function fromItemInArray<L, R, T>(arr: T[], item: keyof T) {
  return fromEmptyArray<string, T[], T[]>(arr).map((result: T[]): Array<T[keyof T]> => result.map((obj) => obj[item]));
}
