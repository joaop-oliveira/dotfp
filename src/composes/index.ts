import _ from 'lodash';

export type Same = (first: any) => (second: any) => boolean;
export type Different = (first: any) => (second: any) => boolean;
export type Greater = (first: any) => (second: any) => boolean;
export type GreaterOrEquals = (first: any) => (second: any) => boolean;
export type Lesser = (first: any) => (second: any) => boolean;
export type LesserOrEquals = (first: any) => (second: any) => boolean;

export const same: Same = (first: any) => (second: any) => first === second;
export const different: Different = (first: any) => (second: any) => first !== second;
export const greater: Greater = (first: any) => (second: any) => first > second;
export const greaterOrEquals: GreaterOrEquals = (first: any) => (second: any) => first >= second;
export const lesser: Lesser = (first: any) => (second: any) => first < second;
export const lesserOrEquals: LesserOrEquals = (first: any) => (second: any) => first <= second;

export type Add = (first: number) => (second: number) => number;
export type Subtract = (first: number) => (second: number) => number;
export type Multiply = (first: number) => (second: number) => number;
export type Divide = (first: number) => (second: number) => number;
export type Modulus = (first: number) => number;
export type Total = <T>(objects: T[] | []) => (field?: string) => number;

export const add: Add = (first: number) => (second: number) => first + second;
export const subtract: Subtract = (first: number) => (second: number) => first - second;
export const multiply: Multiply = (first: number) => (second: number) => first * second;
export const divide: Divide = (first: number) => (second: number) => first / second;
export const modulus: Modulus = (first: number) => (lesser(first)(0) ? first * -1 : first);
export const total: Total = <T>(objects: T[] | []) => (field?: string) =>
  objects.reduce((prev, curr) =>
    // @ts-ignore
    field ? (_.isNumber(prev) ? add(prev)(curr[field]) : add(prev[field])(curr[field])) : add(prev)(curr),
  );
