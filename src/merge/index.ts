import { Left, Right } from '../either';
import { fromEmpty } from '../from';

export const mergeArrayObject = (arr: any[], merge): Left | Right =>
  fromEmpty(arr).fold(
    () => Left('Parametro Array nao pode ser vazia'),
    () => Right(arr.map((obj) => ({ ...obj, ...merge }))),
  );
